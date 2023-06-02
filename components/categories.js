import {View , Text ,ScrollView ,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { categories } from '../contents'

import {logo} from '../assets/images/logo.jpg'

export default function Categories() {

    const [activeCategory , setActiveCategory] = React.useState(null)
    return (
        <View className="mt-4">
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible"
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            >
                {
                    categories.map((category,index) => (
                        <View key={index} className="flex justify-center items-center mr-6">
                            <TouchableOpacity 
                            className="p-1 my-1 rounded-full shadow bg-gray-200">
                                {/* <Image source={logo} style={{width: 50, height: 50}}/> */}
                                <Text className="text-sm">{category.name}</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
                
            </ScrollView>
        </View>
    )
}