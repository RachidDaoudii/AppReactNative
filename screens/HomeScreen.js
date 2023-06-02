import React, { Component } from 'react'
import { Text, View , TextInput , ScrollView , TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";
import { themeColors } from '../themes';
import Categories from './../components/categories';
import { featured } from '../contents';
import RestaurantCard from '../components/restaurant';
import FeaturedRow from '../components/featuredRow';


export default function HomeScreen() {
    return (
      <SafeAreaView className="bg-white">
        <StatusBar barStyle="dark-content" />
        <View className="flex-row items-center space-x-2 px-4 pb-2">
            <View className="flex-row flex-1 items-center p-3 mt-3 rounded-full border border-gray-300">
                <Icon.Search height={25} width={25} stroke="gray"/>
                  <TextInput placeholder='Restaurent' className="ml-2 flex-1"/>
                <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300">
                    <Icon.MapPin height={25} width={25} stroke="gray"/>
                    <Text className="text-gray-500">New York, NYC</Text>
                </View>
           </View>
           <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-1 mt-3 rounded-full">
                <Icon.Sliders height={25} width={25} strokeWidth={2.5} stroke="white"/>
           </View>
        </View>

        <ScrollView className="px-4" showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
        >
            <Categories/>

            <View className="mt-5">
                {
                    [featured, featured, featured].map((item,index) => (
                        <View>
                            <View className="flex-row justify-between items-center px-4">
                                <View>
                                    <Text className="font-bold text-lg">
                                    {item.name}
                                    </Text>
                                    <Text className="text-gray-500 text-xs">
                                    {item.description}
                                    </Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={{color: themeColors.text}} className="font-semibold">See All</Text>
                                </TouchableOpacity>
                                
                                {/* <View className="flex-row items-center space-x-2">
                                    <View className="flex-1">
                                        <Text className="text-lg font-bold">{item.name}</Text>
                                        <Text className="text-gray-500">{item.description}</Text>
                                    </View>
                                    <View className="flex-row items-center space-x-1">
                                        <Text className="text-orange-400">View All</Text>
                                        <Icon.ArrowRight height={20} width={20} stroke="orange"/>
                                    </View>
                                </View>  
                                <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    paddingHorizontal:15
                                }}
                                >
                                    <RestaurantCard
                                    item={item.ingredients[0]}
                                    key={index}
                                    />
                                </ScrollView>    */}
                            </View> 
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    paddingHorizontal:15
                                }}
                                className="overflow-visible py-5"
                                >
                                    <RestaurantCard
                                    item={item.ingredients[0]}
                                    key={index}
                                    />
                                </ScrollView>
                        </View>
                        
                    ))   
                }

            </View>

          </ScrollView>

      </SafeAreaView>
    )
}
