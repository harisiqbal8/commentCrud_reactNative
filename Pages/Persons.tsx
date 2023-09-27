import { View, Text } from 'react-native'
import ButtonComponent from '../Components/Button'
export default function PersonsPage({ navigation }: any) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <ButtonComponent text='Persons' height={100} ClickEvent={() => { navigation.push("Persons") }} />
            </View>
        </View>
    )
}