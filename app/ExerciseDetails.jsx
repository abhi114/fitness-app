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
      <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}}>
            <Text style={{fontSize:hp(3.5)}} className="font-semibold text-neutral-800 tracking-wide" >{item.name}</Text>
            <Text style={{fontSize:hp(2)}} className=" text-neutral-800 tracking-wide">Equipment <Text className="font-bold text-neutral-800">{item?.equipment}</Text> </Text>
            <Text style={{fontSize:hp(2)}} className=" text-neutral-800 tracking-wide">Secondary Muscles <Text className="font-bold text-neutral-800">{item?.secondaryMuscles}</Text></Text>
            <Text style={{fontSize:hp(2)}} className=" text-neutral-800 tracking-wide">Target <Text className="font-bold text-neutral-800">{item?.target}</Text></Text>
             <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-800 tracking-wide" >Instructions</Text>
             {item?.instructions.split(',').map((instruction,index)=>{
                return (
                    <Text key={instruction} style={{fontSize:hp(1.7)}} className="text-neutral-800">{instruction}</Text>
                )
             })}
      </ScrollView>
    </View>
  )
}

export default ExerciseDetails