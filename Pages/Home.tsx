import { View, Text, Image } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ButtonComponent from '../Components/Button';
import { useState } from 'react';
export default function HomePage() {
    let [image, setimage] = useState([])
    async function LaunchCamera() {
        let option = {
            cameraType: "front"
        }
        const result = await launchCamera(option);
        if (!result.didCancel) {
            let imagearray = [...image];
            result.assets?.map((item, index) => {
                imagearray.push(item.uri)
            })
            setimage(imagearray)
        }
    }
    async function LaunchCameraLibrary() {
        let option = {
            selectionLimit: 2
        } as any
        const result = await launchImageLibrary(option);
        if (!result.didCancel) {
            let imagearray = [...image];
            result.assets?.map((item, index) => {
                imagearray.push(item.uri)
            })
            console.log(imagearray)
            setimage(imagearray)
        }

    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <View style={{ height: 200, width: "90%", marginBottom: 20 }}>
                <Image
                    source={{ uri: image != "" ? image : "https://media.istockphoto.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I=" }}
                    style={{ height: 200, width: "100%", borderRadius: 20 }}
                />

            </View>
            <ButtonComponent text='Open Camera' ClickEvent={LaunchCamera} />
             */}
            <ButtonComponent text='Camera Library' ClickEvent={LaunchCameraLibrary} />
        </View>
    )
}