import { KeyboardAvoidingView, ScrollView, Text, TextInput, View } from "react-native";
import ButtonComponent from "../Components/Button";
import { useAppDispatch, useAppSelector } from "../Redux/Hook";
import { useEffect, useState } from "react";
import { Posts, AddPost, EditPost } from "../Redux/PostSlice";
import axios from "axios";
import { UploadData } from '../Redux/UserDataSlice'
import { Picker } from "@react-native-picker/picker";

export default function PostForm({ navigation, route }: any) {
    let dispatch = useAppDispatch();
    let userstate = useAppSelector(state => state.DummyUser.UserList)
    let state = useAppSelector(state => state.Posts.PostList);
    let [obj, setobj] = useState<Posts>({
        id: 0,
        body: "",
        title: "",
        userId: 0
    });
    function Submitform() {
        if (obj.id == 0) {
            //Save
            axios.post("https://jsonplaceholder.typicode.com/posts", obj)
                .then(result => {
                    dispatch(AddPost(result.data))
                    navigation.navigate("Posts")
                })
                .catch(error => {
                    console.log(error)
                })
        }
        else {
            //Edit
            axios.put("https://jsonplaceholder.typicode.com/posts", obj)
                .then(result => {
                    console.log(result.data)
                    // navigation.navigate("Posts")
                })
                .catch(error => {
                    console.log(error)
                })
        }
        
    }


    
    useEffect(() => {
        if (route.params) {
            let dataobject = state.filter(x => x.id == route.params.Id)[0]
            setobj({
                body: dataobject.body,
                title: dataobject.title,
                id: dataobject.id,
                userId: dataobject.userId,
            })
        }
    }, [])
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={undefined} keyboardVerticalOffset={500}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 15 }}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 25, color: "black", marginBottom: 10 }}>UserName:</Text>
                    <View style={{ height: 60, borderWidth: 1, borderColor: "black", borderRadius: 10 }}>
                        <Picker
                            selectedValue={obj.userId}
                            onValueChange={(itemValue, itemIndex) =>
                                setobj({
                                    ...obj
                                    , userId: itemValue
                                })
                            }>
                            {
                                userstate.map((item) => {
                                    return (
                                        <Picker.Item label={item.name} value={item.id} key={item.id} />
                                    )
                                })
                            }
                        </Picker>
                    </View>
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 25, color: "black", marginBottom: 10 }}>Title:</Text>
                    <TextInput onChangeText={(text) => setobj({ ...obj, title: text })} multiline={true} value={obj.title} placeholder="Enter Title" style={{ fontSize: 25, height: 100, paddingVertical: 0, borderWidth: 1, borderColor: "black", paddingHorizontal: 15, borderRadius: 10 }} />
                </View>
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 25, color: "black", marginBottom: 10 }}>Body:</Text>
                    <TextInput onChangeText={(text) => setobj({ ...obj, body: text })} multiline={true} value={obj.body} placeholder="Enter Body" style={{ fontSize: 25, height: 250, borderWidth: 1, borderColor: "black", paddingHorizontal: 15, paddingVertical: 0, borderRadius: 10 }} />
                </View>
                <View>
                    <ButtonComponent width={"100%"} text={route.params ? "Update" : "Save"} backgroundcolor="green" height={60} ClickEvent={Submitform} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}