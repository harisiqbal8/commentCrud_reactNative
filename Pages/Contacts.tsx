import { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, FlatList, Image } from 'react-native'
import Contacts from 'react-native-contacts'
import ButtonComponent from '../Components/Button';
export default function ContactsPage({ navigation }: any) {
    let [contacts, setcontacts] = useState([])
    useEffect(() => {
        GetContacts()
    }, [])
    function GetContacts() {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
        })
            .then((res) => {
                Contacts.getAll()
                    .then((result: any) => {
                        setcontacts(result);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            })
            .catch((error) => {
                console.error('Permission error: ', error);
            });

    }
    function DeleteContact(id: number) {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
        })
            .then((res) => {
                Contacts.deleteContact({ recordID: id })
                    .then(recordId => {
                        console.log(recordId)
                        GetContacts()
                    })
                    .catch(error => console.log(error))
            })
            .catch((error) => {
                console.error('Permission error: ', error);
            });

    }
    function ContactById(Id: number) {
        Contacts.getContactById(Id)
            .then((response) => {

                if (response != null || response != undefined) {
                    Contacts.editExistingContact(response).then(contact => {
                        GetContacts()
                    });
                }

            })
            .catch((error) => console.log(error))
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: "#565656" }}>
                <ButtonComponent text='Add Contacts' fontsize={20} width={150} height={80} ClickEvent={() => navigation.push("ContactForm")} />
                <FlatList
                    contentContainerStyle={{ marginVertical: 15 }}
                    data={contacts}
                    renderItem={({ item, index }: any) => {
                        let phonenumber = JSON.stringify(item.phoneNumbers)
                        phonenumber = JSON.parse(phonenumber)
                        let phonenumberarray: any = []
                        phonenumberarray = phonenumber
                        return (
                            <>
                                <View key={index} style={{
                                    paddingHorizontal: 15, maxHeight: 130, minHeight: 80, paddingBottom: 10
                                    , marginBottom: 10, flexDirection: 'row', borderBottomWidth: 1, borderColor: "white"
                                }}>
                                    <View style={{ width: 50, maxHeight: 130, minHeight: 80, justifyContent: 'center' }}>
                                        {item.hasThumbnail
                                            ?
                                            <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: item.thumbnailPath }} />
                                            :
                                            <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "yellow", justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", textAlign: 'center' }}>{item.givenName.substring(0, 1) + item.familyName.substring(0, 1)}</Text>
                                            </View>
                                        }
                                    </View>
                                    <View style={{
                                        flex: 1, justifyContent: 'center'
                                    }}>
                                        <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>{item.displayName}</Text>
                                        {
                                            phonenumberarray.map((contact, index) => {
                                                return (
                                                    <Text key={index} style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
                                                        {contact.number}</Text>
                                                )
                                            })
                                        }

                                    </View>
                                    <View style={{ width: 50 }}>
                                        <View style={{ marginBottom: 10 }}>
                                            <ButtonComponent text='Edit' width={50} height={50} fontsize={15} ClickEvent={() => { ContactById(item.recordID) }} />
                                        </View>
                                        <View>
                                            <ButtonComponent text='Delete' width={50} height={50} fontsize={15} ClickEvent={() => { DeleteContact(item.recordID) }} />
                                        </View>
                                    </View>
                                </View >
                            </>

                        )
                    }}
                />
            </View>
        </View >
    )
}