import {View, Text, StatusBar, Image, SafeAreaView} from 'react-native'
import {MapPinIcon} from 'react-native-heroicons/solid'
import {BellIcon} from 'react-native-heroicons/outline'
import { themeColors } from '../theme'

const HomeScreen = () => {
    return (
        <View className='flex-1 justify-center items-center p-2'>
            <StatusBar />
            <Image source={require('../assets/images/beansBackground1.png')}
             className='w-full absolute -top-5 opacity-10 h-[220px]'
            />

            <SafeAreaView className='flex-1 w-full'>
                {/* avatar and bell icon */}
                <View className='px-4 flex-row justify-between items-center'>
                    <Image source={require('../assets/images/avatar.png')}
                    className='h-9 w-9 rounded-full'
                    />
                    <View className='flex-row items-center space-x-2'>
                        <MapPinIcon size="25" color={themeColors.bgLight}/>
                        <Text className='text-base font-semibold'>New York, NYC</Text>
                    </View>
                    <BellIcon size="27" color="black"/>    
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen