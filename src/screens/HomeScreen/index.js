import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, StatusBar } from 'react-native'
import { useStore, useDispatch } from "react-redux";
import ButtonComponent from '../../components/common/ButtonComponent';
import CreatePost from '../../components/common/CreatePost';
import EditPost from '../../components/common/EditPost';
import PostsComponent from '../../components/containers/PostsComponent';
import PlusIcon from 'react-native-vector-icons/FontAwesome5'
import { savePost, deleteAllPosts } from '../../redux/actions/postAction'
import IconButtonComponent from '../../components/common/IconButton';
import GradientButtons from '../../components/common/GradientButton'
export default function HomeScreen() {
    const store = useStore();
    const dispatch = useDispatch()

    const [postData, setPostData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [editTitle, setEditTitle] = useState("")
    const [editContent, setEditContent] = useState("")
    const [indexValue, setIndexValue] = useState(0)
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);
    useEffect(() => {
        savePostData()
    }, [postData])

    const _keyboardDidShow = () => setKeyboardStatus("Keyboard Shown");
    const _keyboardDidHide = () => setKeyboardStatus("Keyboard Hidden");
    const savePostData = async () => {
        const { postReducer } = store.getState()
        setPostData(postReducer.data)
    }
    const createPost = () => {
        setShowModal(true)
    }
    const hideModal = () => {
        setShowModal(false)
        setShowEditModal(false)
    }
    const getPostData = (title, content) => {
        dispatch({ type: "SAVEPOST", payload: { title: title, content: content } })
        savePostData()
    }
    const getPostEditData = (title, content) => {
        console.log(title, content, indexValue)
        dispatch({ type: "EDITPOST", payload: { title: title, content: content, index: indexValue } })
        savePostData()
    }

    const deleteAllPost = async () => {
        dispatch({ type: "DELETEALLPOSTS" })
        savePostData()
    }
    const deletePost = async (index) => {
        dispatch({ type: "DELETEPOST", payload: index })
        savePostData()

    }
    const editPost = async (index) => {
        setIndexValue(index)
        setEditTitle(postData[index].title)
        setEditContent(postData[index].content)
        setShowEditModal(true)
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#3450A1" barStyle="light-content" />
            <Text style={styles.header}>DEMO</Text>


            {postData.length ? <PostsComponent data={postData}
                deletePost={deletePost}
                editPost={editPost}
            /> :
                <View style={styles.noPostContainer}>
                    <Text style={styles.noPostText}>No Post</Text>
                </View>
            }          
          {postData.length > 0 && <GradientButtons
              colors={["#90D5E5", "#97B6C8", "#A9A2C3"]}
              start={{ x: 0.3, y: 0.1 }}
              end={{ x: 0.8, y: 0.5 }}
              locations={[0, 0.3, 1.0]}
              title="Delete All Posts"
              callBack={deleteAllPost}
              buttonStyle={styles.deleteButton}
            />}
            <IconButtonComponent
                title="Create Post" buttonStyle={styles.createButton}
                buttonTitleStyle={styles.createButtonText}
                callBack={createPost}
            />
            <CreatePost
                showModal={showModal}
                hideModal={hideModal}
                getPostData={getPostData}
            />
            <EditPost
                showModal={showEditModal}
                showTitle={editTitle}
                showContent={editContent}
                hideModal={hideModal}
                getPostEditData={getPostEditData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3450A1'
    },
    header: {
        alignSelf: 'center',
        fontSize: 24,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    deleteButton: {
       marginTop:-50,
       marginBottom:20,
        height: 50,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf:'baseline',
    },
    deleteButtonText: {
        color: '#f2f2f2',
        fontSize: 1,
        fontWeight: 'bold'
    },
    createButton: {
        position: 'absolute',
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 82,
        backgroundColor: '#90D5E5',
        borderColor: '#000000',
        borderRadius: 200 / 2
    },
    createButtonText: {
        color: '#000',
        fontSize: 13,
        fontWeight: 'bold'
    },
    noPostContainer: {
        flex: 0,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noPostText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})
