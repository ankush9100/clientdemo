import React from 'react'
import { View, Text,FlatList } from 'react-native'
import PostComponent from '../../common/PostComponent'
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
export default function PostsComponent({data,editPost,deletePost}) {
    const renderItem=({item,index})=><PostComponent data={item} 
    editPost={editPost}
    deletePost={deletePost}
    index={index}/>
    return (
        <View style={{flex:1,paddingBottom:60}}>
        <FlatList
        contentContainerStyle={{paddingBottom:60,flexGrow: 1,}}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item,index)=> "kkkk"+index}
      />
        </View>
    )
}
