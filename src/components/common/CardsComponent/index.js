import React from 'react'
import { View, Text,StyleSheet,Dimensions } from 'react-native'
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EditIcon from 'react-native-vector-icons/FontAwesome5';
const {width} = Dimensions.get('window')
export default function CardComponent({title,content,editPost,deletePost,index}) {
    return (
        <View style={styles.container}>
            <View style={{width:"80%"}}>
            <Text style={styles.title}>{title}</Text>
           <Text style={styles.content}>{content}</Text>
            </View>
            <View style={{width:"20%",alignItems:'center'}}>
            <DeleteIcon name="delete" size={20} color="#fff" onPress={()=>deletePost(index)}/>
           <EditIcon name="edit" size={15} color="#fff"  style={{marginTop:10}} onPress={()=>editPost(index)}/>
            </View>
          
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:width-40,
        minHeight:100,
        paddingTop:10,
        paddingBottom:10,
        flex:1,
        backgroundColor:'#041A55',
        alignSelf:'center',
        flex:1,
        elevation:5,
        alignItems:'center',
        borderRadius:10,
    },
    title:{
        fontSize:15,
        marginLeft:20,
        color:'#fff',
        fontFamily: "Cochin"
    },
    content:{
        fontSize:12,
        marginLeft:20,
        color:'#fff',
        marginTop:10
    }
})