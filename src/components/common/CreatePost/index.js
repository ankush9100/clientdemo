import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Dimensions } from "react-native";
import ButtonComponent from "../ButtonComponent";
import GradientButtons from '../GradientButton'
const { width } = Dimensions.get('window')
const CreatePost = ({ showModal, hideModal, getPostData }) => {
  const [modalVisible, setModalVisible] = useState(showModal);
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const onSubmit = () => {
    getPostData(title, content)
    setContent("")
    setTitle("")
    hideModal()
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
      >
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)' }}>
          <View style={styles.modalView}>
            <Text style={styles.headerText}>Create New Post</Text>
            <TextInput
              placeholder="Title"
              onChangeText={(text) => setTitle(text)}
              style={styles.inputStyle}
            />
            <TextInput
              placeholder="Content"
              style={styles.inputStyle}
              multiline
              onChangeText={(text) => setContent(text)}
            />
           

            <GradientButtons
              colors={["#90D5E5", "#97B6C8", "#A9A2C3"]}
              start={{ x: 0.3, y: 0.1 }}
              end={{ x: 0.8, y: 0.5 }}
              locations={[0, 0.3, 1.0]}
              title="Submit"
              callBack={onSubmit}
              buttonStyle={styles.submitButton}
            />
            <GradientButtons
              colors={["#90D5E5", "#97B6C8", "#A9A2C3"]}
              start={{ x: 0.3, y: 0.1 }}
              end={{ x: 0.8, y: 0.5 }}
              locations={[0, 0.3, 1.0]}
              title="Cancel"
              callBack={hideModal}
              buttonStyle={styles.cancelButton}
            />
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold'
  },
  modalView: {
    margin: 20,
    width: width - 40,
    backgroundColor: "#3450A1",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  submitButton: {
    marginTop: 20,
    marginBottom: 20,
    width: 140,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',

  },
  cancelButton: {
    width: 140,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  submitButtonText: {
    color: '#f2f2f2',
    fontSize: 13,
    fontWeight: 'bold'
  },
  inputStyle: {
    backgroundColor: '#efefef',
    width: width - 100,
    borderRadius: 10,
    marginTop: 20,
    padding: 15

  }
});

export default CreatePost;