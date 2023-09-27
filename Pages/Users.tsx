import { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, FlatList, Image } from 'react-native'
import Contacts from 'react-native-contacts'
import ButtonComponent from '../Components/Button';
import { useAppDispatch, useAppSelector } from '../Redux/Hook';
import { User, DeleteUser } from '../Redux/UserSlice'
export default function ContactsPage({ navigation }: any) {
    let dispatch = useAppDispatch();
    let state = useAppSelector(state => state.Users.UserList)
    console.log(state)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: "#565656" }}>
                <ButtonComponent text='Add Users' fontsize={20} width={150} height={80} ClickEvent={() => navigation.push("UserForm")} />
                <FlatList
                    contentContainerStyle={{ marginVertical: 15 }}
                    data={state}
                    renderItem={({ item, index }: any) => {
                        let userobject: User = item;
                        return (
                            <View key={index} style={{
                                paddingHorizontal: 15, maxHeight: 130, minHeight: 80, paddingBottom: 10
                                , marginBottom: 10, flexDirection: 'row', borderBottomWidth: 1, borderColor: "white"
                            }}>
                                <View style={{
                                    flex: 1, justifyContent: 'center'
                                }}>
                                    <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>{userobject.FirstName}</Text>
                                    <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>{userobject.LastName}</Text>
                                    <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>{userobject.EmailAddress}</Text>

                                </View>
                                <View style={{ width: 50 }}>
                                    <View style={{ marginBottom: 10 }}>
                                        <ButtonComponent text='Edit' width={50} height={50} fontsize={15} ClickEvent={() => navigation.push("UserForm", { UserId: userobject.Id })} />
                                    </View>
                                    <View>
                                        <ButtonComponent text='Delete' width={50} height={50} fontsize={15} ClickEvent={() => { dispatch(DeleteUser(userobject.Id)) }} />
                                    </View>
                                </View>
                            </View >
                        )

                    }}
                />
            </View>
        </View >
    )
}