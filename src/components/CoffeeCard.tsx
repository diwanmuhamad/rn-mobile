import {View, Text, Image} from 'react-native'
import { themeColors } from '../theme'
import { StarIcon } from 'react-native-heroicons/solid'

const CoffeeCard = ({item}: any) => {
    return (
        <View
            style={{
                borderRadius: 40,
                height: 350,
                width: 250
            }}
        >
            <View
                style={{
                    height: 50,
                    width: 250
                }}
            ></View>
            <View
                style={{
                    shadowColor: 'black',
                    shadowRadius: 30,
                    shadowOffset: {width: 0, height: 40},
                    shadowOpacity: 0.8,
                }}
                className='left-[45px] absolute z-10'
                >
                    <Image source={item.image} className="h-40 w-40"/>
                </View>
            <View
            style={{
                borderRadius: 40,
                backgroundColor: themeColors.bgDark,
                height: 300,
                width: 250
            }}
            >
                
                <View className='px-5 mt-[150px] space-y-3'>
                    <Text className='text-3xl text-white font-semibold'>
                        {item.name}
                    </Text>
                    <View style={{backgroundColor: 'rgba(255,255,255,0.2)'}}
                        className='flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16'
                    >
                        <StarIcon size="15" color="white"/>
                        <Text className='text-base font-semibold text-white'>{item.stars}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CoffeeCard