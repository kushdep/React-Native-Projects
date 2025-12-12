import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

const Profile = ({navigation}) => {
    return <SafeAreaProvider>
        <SafeAreaView>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text>GO BACK</Text>
            </TouchableOpacity>
        </SafeAreaView>
    </SafeAreaProvider>
}

export default Profile