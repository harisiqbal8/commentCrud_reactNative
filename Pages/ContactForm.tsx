import { useEffect, useState } from "react"
import { PermissionsAndroid, Text, TextInput, View } from "react-native"
import Contacts from 'react-native-contacts'
import ButtonComponent from "../Components/Button"

export default function ContactForm({ navigation, route }: any) {
    let [data, setdata] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
        Image: "",
        RecordId: 0,
    })
    function ContactById(Id: number) {
        Contacts.getContactById(Id)
            .then((response) => {
                
                if (response != null || response != undefined) {
                    Contacts.editExistingContact(response).then(contact => {
                        //contact updated
                    });
                }

            })
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        if (route.params) {
            ContactById(route.params.ContactId)
        }
    }, [])
    function SubmitForm() {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
        })
            .then((res) => {
                let newPerson = {
                    emailAddresses: [{
                        label: "work",
                        email: data.Email,
                    }],
                    familyName: data.LastName,
                    givenName: data.FirstName,
                    displayName: data.FirstName + " " + data.LastName,
                    phoneNumbers: [
                        {
                            label: 'mobile',
                            number: data.PhoneNumber,
                        },
                    ],
                    recordId: data.RecordId.toString()
                } as any
                console.log(newPerson)
                if (data.RecordId > 0) {
                    Contacts.updateContact(newPerson)
                } else {
                    Contacts.addContact(newPerson)
                }
                navigation.push("Contacts")

            })
            .catch((error) => {
                console.error('Permission error: ', error);
            });

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
                <Text style={{ fontSize: 20, color: "white", marginBottom: 10 }}>Phone Number:</Text>
                <TextInput value={data.PhoneNumber} onChangeText={(text) => { setdata({ ...data, PhoneNumber: text }) }} keyboardType="number-pad" style={{ backgroundColor: "white", borderRadius: 15, paddingHorizontal: 15, height: 60, fontSize: 20 }} />
            </View>
            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 20, color: "white", marginBottom: 10 }}>Email Address:</Text>
                <TextInput value={data.Email} onChangeText={(text) => { setdata({ ...data, Email: text }) }} keyboardType="email-address" style={{ backgroundColor: "white", borderRadius: 15, paddingHorizontal: 15, height: 60, fontSize: 20 }} />
            </View>
            <View style={{ marginBottom: 20 }}>
                <ButtonComponent width="100%" height={60} text="Save" ClickEvent={SubmitForm} />
            </View>

        </View>
    )
}