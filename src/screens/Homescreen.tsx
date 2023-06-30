import {View, Text, StatusBar, Image, SafeAreaView, TextInput, TouchableOpacity, FlatList} from 'react-native'
import {MapPinIcon} from 'react-native-heroicons/solid'
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { themeColors } from '../theme'
import { categories } from '../constants'
import { useState } from 'react'
const HomeScreen = () => {
    const [category, setCategory] = useState(1)
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

                {/* search bar */}
                <View className='mx-5 mt-14'>
                    <View className='flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]'>
                        <TextInput placeholder='search' className='p-4 flex-1 font-semibold text-gray-700'/>
                        <TouchableOpacity className={`rounded-full p-2 bg-br-light`}>
                            <MagnifyingGlassIcon size="25" strokeWidth={2} color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* categories */}

                <View className='px-5 mt-6'>
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={item=>(item.id).toString()}
                        className='overflow-visible'
                        renderItem={({item}) => {
                            let isActive = item.id == category
                            let activeTextClass = isActive? 'text-white' : 'text-gray-700'
                            return (
                                <TouchableOpacity 
                                    onPress={()=>setCategory(item.id)}
                                    className={`p-4 px-5 rounded-full mr-2 shadow ${isActive? 'bg-br-light' : 'bg-[#e6e6e6]'}`}>
                                    <Text className={`font-bold ${activeTextClass}`}>
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen