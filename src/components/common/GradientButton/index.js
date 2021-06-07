import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import { normalize } from '../utilities/Responsive'
export default function GradientButtons({ colors, start, end, location, title, callBack, buttonStyle }) {
    return (
        <Pressable style={styles.box} onPress={callBack}>
            <LinearGradient colors={colors} style={buttonStyle}
                start={start} end={end}
                locations={location}>
                <Text style={styles.textStyle}>{title}</Text>
            </LinearGradient>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    box: { 
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width:100
    },

    textStyle: {
        fontSize: 14,
        color: '#fff',
        fontWeight:'bold'
    },
});