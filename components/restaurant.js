import {View , Text ,ScrollView ,TouchableWithoutFeedback ,Image} from 'react-native'

export default function RestaurantCard({item}){
    return (
        <TouchableWithoutFeedback>
            <View className="mr-6 bg-white rounded-3xl shadow-lg">
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold  pt-2">
                        {item.name}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}