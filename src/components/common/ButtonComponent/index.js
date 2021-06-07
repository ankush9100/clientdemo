import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

export default function ButtonComponent({buttonStyle,buttonTitleStyle,title,callBack}) {
    return (
           <TouchableOpacity style={buttonStyle} onPress={callBack}>
                <Text style={buttonTitleStyle}>{title} </Text>
            </TouchableOpacity>
    )
}
