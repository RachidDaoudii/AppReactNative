import {View , Text ,ScrollView ,TouchableOpacity ,Image} from 'react-native'
import * as Icon from "react-native-feather";


export default function FeaturedRow({name,description}) {
    <View className="flex-row items-center space-x-3 mb-4">
        <View className="flex-1">
            <View className="flex-row items-center space-x-2">
                <View className="flex-1">
                    <Text className="text-lg font-bold">{name}</Text>
                    <Text className="text-gray-500">{description}</Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <Text className="text-orange-400">View All</Text>
                    <Icon.ArrowRight height={20} width={20} stroke="orange"/>
                </View>
            </View>   
        </View>   
    </View>
}