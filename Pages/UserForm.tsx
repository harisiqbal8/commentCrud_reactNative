import { useEffect, useState } from "react"
import { PermissionsAndroid, Text, TextInput, View } from "react-native"
import Contacts from 'react-native-contacts'
import ButtonComponent from "../Components/Button"
import { AddUser, EditUser, User } from '../Redux/UserSlice'
import { useAppDispatch, useAppSelector } from "../Redux/Hook"

export default function UserForm({ navigation, route }: any) {
    let state = useAppSelector((state) => state.Users.UserList)
    let dispatch = useAppDispatch();
    let [data, setdata] = useState({
        FirstName: "",
        LastName: "",
        EmailAddress: "",
        Id: 0
    })
    useEffect(() => {
        if (route.params) {
            let userobject: User = state.filter(x => x.Id == route.params.UserId)[0]
            setdata({
                FirstName: userobject.FirstName,
                LastName: userobject.LastName,
                EmailAddress: userobject.EmailAddress,
                Id: userobject.Id,
            })
        }
    },[])

    function SubmitForm() {
        let users: User = data;
        if (users.Id > 0) {
            dispatch(EditUser(users))
        } else {
            dispatch(AddUser(users))
        }
        navigation.push("Users")
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 15, backgroundColor: "#565656" }}>
            <View style={{ marginBottom: 20, marginTop: 50 }}>
                <Text style={{ fontSize: 20, color: "white", marginBottom: 10 }}>First Name:</Text>
                <TextInput value={data.FirstName} onChangeText={(text) => { setdata({ ...data, FirstName: text }) }} style={{ backgroundColor: "white", borderRadius: 15, paddingHorizontal: 15, height: 60, fontSize: 20 }} />
            </View>
            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 20, color: "white", marginBottom: 10 }}>Last Name:</Text>
                <TextInput value={data.LastName} onChangeText={(text) => { setdata({ ...data, LastName: text }) }} style={{ backgroundColor: "white", borderRadius: 15, paddingHorizontal: 15, height: 60, fontSize: 20 }} />
            </View>
            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 20, color: "white", marginBottom: 10 }}>Email Address:</Text>
                <TextInput value={data.EmailAddress} onChangeText={(text) => { setdata({ ...data, EmailAddress: text }) }} keyboardType="email-address" style={{ backgroundColor: "white", borderRadius: 15, paddingHorizontal: 15, height: 60, fontSize: 20 }} />
            </View>
            <View style={{ marginBottom: 20 }}>
                <ButtonComponent width="100%" height={60} text="Save" ClickEvent={SubmitForm} />
            </View>

        </View>
    )
}