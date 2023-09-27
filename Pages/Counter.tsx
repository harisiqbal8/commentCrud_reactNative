import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import { increment, decrement, incrementByAmount } from '../Redux/CounterSlice'
import { SetImage } from '../Redux/ProfilePictureSlice'
import { useAppDispatch, useAppSelector } from '../Redux/Hook'
import ButtonComponent from '../Components/Button'
import { launchImageLibrary } from 'react-native-image-picker'
export default function CounterForm() {
    let state = useAppSelector((state) => state.Counter)
    let dispatch = useAppDispatch()

    async function OpenGallery() {
        let options = {

        } as any
        let result = await launchImageLibrary(options)
        dispatch(SetImage(result.assets[0].uri))
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ButtonComponent text='Open Gallery' ClickEvent={OpenGallery} />
            <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 20 }}>
                <TouchableOpacity onPress={() => dispatch(decrement())} style={{ width: 50, height: 50, backgroundColor: "blue" }}>
                    <Text style={{ color: "white", fontSize: 35, fontWeight: 'bold', textAlign: 'center' }}>-</Text>
                </TouchableOpacity>
                <View style={{ width: 150, height: 50, marginHorizontal: 15 }}>
                    <TextInput value={state.CounterValue.toString()} style={{ fontSize: 25, textAlign: 'center', verticalAlign: 'middle', width: 150, height: 50, borderWidth: 2, borderColor: "black" }} />
                </View>
                <TouchableOpacity onPress={() => dispatch(increment())} style={{ width: 50, height: 50, backgroundColor: "blue" }}>
                    <Text style={{ color: "white", fontSize: 35, fontWeight: 'bold', textAlign: 'center' }}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => dispatch(incrementByAmount(state.CounterValue))} style={{ width: 150, height: 50, backgroundColor: "blue" }}>
                <Text style={{ color: "white", fontSize: 35, fontWeight: 'bold', textAlign: 'center' }}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}