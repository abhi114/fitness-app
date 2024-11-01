import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
const ExerciseDetails = () => {
    const item = useLocalSearchParams();
    const router = useRouter();
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]" style={{elevation:3}}>
        <Image source={{uri:item.gifUrl}} contentFit='cover' style={{width:wp(100),height:wp(100)}} className="rounded-b-[40px]"/>
      </View>
      <TouchableOpacity onPress={()=>router.back()} className="mx-5 absolute rouded-full mt-10 right-0">
                    <AntDesign name="closecircle" size={hp(3.5)} color="#f43f5e" />
      </TouchableOpacity>
      {/* details */}
      <ScrollView>
        
      </ScrollView>
    </View>
  )
}

export default ExerciseDetails