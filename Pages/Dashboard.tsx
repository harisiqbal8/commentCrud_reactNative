import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import ButtonComponent from '../Components/Button'
export default function Dashboard({ navigation }: any) {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>

                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <ButtonComponent text='Home' height={100} ClickEvent={() => { navigation.navigate("Home") }} />
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <ButtonComponent text='Gallery' height={100} ClickEvent={() => { navigation.navigate("Gallery") }} />
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <ButtonComponent text='Contacts' height={100} ClickEvent={() => { navigation.navigate("Contacts") }} />
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <ButtonComponent text='Users' height={100} ClickEvent={() => { navigation.navigate("Users") }} />
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <ButtonComponent text='Counter' height={100} ClickEvent={() => { navigation.navigate("Counter") }} />
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <ButtonComponent text='Posts' height={100} ClickEvent={() => { navigation.navigate("Posts") }} />
                </View>
            </View>
        </View>
    )
}
