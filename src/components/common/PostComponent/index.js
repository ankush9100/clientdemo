import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import CardComponent from '../CardsComponent'

export default function PostComponent({data,editPost,deletePost,index}) {
    return (
        <View style={styles.container}>
            <CardComponent 
            title={data.title} 
            content={data.content}
            editPost={editPost}
            deletePost={deletePost}
            index={index}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
       
    }
})