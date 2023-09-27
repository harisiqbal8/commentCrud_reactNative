import { FlatList, Text, ActivityIndicator, View, RefreshControl, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "../Redux/Hook";
import { useState, useEffect } from "react";
import axios from "axios";
import { UpdateList, Posts, DeletePost } from '../Redux/PostSlice'
import ButtonComponent from "../Components/Button";
import { UploadData } from "../Redux/UserDataSlice";
export default function PostsPage({ navigation }: any) {
    let userstate = useAppSelector(state => state.DummyUser.UserList)
    let state = useAppSelector((state) => state.Posts.PostList)
    let dispatch = useAppDispatch();
    let [refresh, setrefresh] = useState(false)
    let [loader, setloader] = useState(false)
    function GetAllUsers() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(result => {
                dispatch(UploadData(result.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        if (userstate.length == 0) {
            GetAllUsers()
        }
        GetData()
    }, [])


    async function GetData(refreshloader = false) {
        if (refreshloader || state.length == 0) {
            setloader(true)
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then((result) => {
                    let response: Posts[] = result.data;
                    let sortdata = response.sort((a, b) => {
                        return b.id - a.id
                    })
                    dispatch(UpdateList(sortdata))
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => { setloader(false); setrefresh(false) })
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {
                loader ?
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator color="red" size="large" />
                    </View>
                    :
                    <View style={{ flex: 1 }}>
                        <View style={{ marginVertical: 20, alignItems: 'center' }}>
                            <ButtonComponent text="Add" backgroundcolor="green" height={60} ClickEvent={() => { navigation.push("PostForm") }} />
                        </View>
                        <FlatList
                            refreshControl={<RefreshControl refreshing={refresh} onRefresh={() => {
                                setrefresh(true)
                                GetData(true);
                            }} />}
                            ListEmptyComponent={
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}>No Record Found</Text>
                                </View>
                            }
                            contentContainerStyle={state.length == 0 ? { flex: 1 } : { paddingTop: 20, paddingHorizontal: 15 }}
                            data={state.filter(x => x.status == 1)}
                            renderItem={({ item, index }) => {
                                return (
                                    <View key={index} style={{ flexDirection: 'row', minHeight: 150, backgroundColor: "grey", marginBottom: 20, borderRadius: 20, padding: 15, justifyContent: 'center' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: "white" }}>
                                                <Text style={{ color: "black" }}>Id: </Text>
                                                <Text>{item.id}</Text>
                                            </Text>
                                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: "white" }}>
                                                <Text style={{ color: "black" }}>Title: </Text>
                                                <Text>{item.title}</Text>
                                            </Text>
                                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: "white" }}>
                                                <Text style={{ color: "black" }}>Body: </Text>
                                                <Text>{item.body}</Text>
                                            </Text>
                                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: "white" }}>
                                                <Text style={{ color: "black" }}>Username: </Text>
                                                <Text>{userstate.filter(x => x.id == item.userId)[0].name}</Text>
                                            </Text>
                                        </View>
                                        <View style={{ width: 100, alignItems: 'center', justifyContent: 'center' }}>
                                            <TouchableOpacity onPress={() => { navigation.push("PostForm", { Id: item.id }) }} style={{ marginBottom: 10, width: 80, height: 50, backgroundColor: "blue", borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 20, color: "white", fontWeight: 'bold' }}>Edit</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => dispatch(DeletePost(item.id))} style={{ marginBottom: 10, width: 80, height: 50, backgroundColor: "red", borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 20, color: "white", fontWeight: 'bold' }}>Delete</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ marginBottom: 10, width: 80, height: 50, backgroundColor: "green", borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 15, color: "white", fontWeight: 'bold' }}>Comments</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )
                            }}
                        />
                    </View>

            }


        </View >
    )
}