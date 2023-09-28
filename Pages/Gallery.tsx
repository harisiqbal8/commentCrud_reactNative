import {launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';
import ButtonComponent from '../Components/Button';
import {View, Image, ScrollView} from 'react-native';
export default function GalleryComponent() {
  let [image, setimage] = useState([]);
  async function LaunchCameraLibrary() {
    let option = {
      selectionLimit: 2,
    } as any;
    const result = await launchImageLibrary(option);
    if (!result.didCancel) {
      let imagearray = [...image];
      result.assets?.map((item, index) => {
        imagearray.push(item.uri);
      });
      setimage(imagearray);
    }
  }
  return (
    <>
      <View style={{alignItems: 'center', marginVertical: 10}}>
        <ButtonComponent
          text="Camera Library"
          ClickEvent={LaunchCameraLibrary}
        />
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {image.map((item, index) => {
            return (
              <Image
                source={{uri: item}}
                key={index}
                style={{width: '25%', height: 100}}
                resizeMode="cover"
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
