import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

interface ButtonInterface {
    text: string,
    ClickEvent(): any,
    height?: number,
    borderradius?: number,
    width?: any,
    backgroundcolor?: string,
    fontsize?: number,
    fontcolor?: any
}


export default function ButtonComponent(params: ButtonInterface) {
    return (
        <TouchableOpacity style={styles(params).ButtonContainer} onPress={params.ClickEvent}>
            <Text style={styles(params).TextStyling}>{params.text}</Text>
        </TouchableOpacity>
    )
}
const styles = (params: ButtonInterface) => StyleSheet.create({
    ButtonContainer: {
        height: params.height || 80,
        backgroundColor: params.backgroundcolor || "grey",
        width: params.width || "90%",
        borderRadius: params.borderradius || 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextStyling: {
        fontSize: params.fontsize || 35,
        color: params.fontcolor || "white",
        fontWeight: "bold"
    }

})