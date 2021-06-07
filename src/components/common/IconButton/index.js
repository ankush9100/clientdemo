import React from 'react'
import { View, Text,Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
export default function IconButtonComponent({buttonStyle,buttonTitleStyle,title,callBack}) {
    return (
           <Pressable style={buttonStyle} onPress={callBack}>
                <Icon name="plus" size={30} color="#fff"/>
            </Pressable>
    )
}
