import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodyPart } from './exerciseDb'
import { dummyExcersies } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import ExerciseList from './ExerciseList'

const Exercises = () => {
     const router = useRouter();
     const item = useLocalSearchParams();
     const [exercises,setExercises] = useState(dummyExcersies);
     console.log('got item' + item);
     const getExercises =async (bodyPart)=>{
        let data = await fetchExercisesByBodyPart(bodyPart);
        console.log('got Data:' + JSON.stringify(data));
        setExercises(data);
     }
     useEffect(() => {
       
        if(item){
       //getExercises(item.name)
        }
       return () => {
         
       }
     }, [])
     
  return (
    <ScrollView>
        <StatusBar style='light'/>
        <Image source={item.image} style={{width:wp(100),height:hp(45)}} className="rounded-b-[40px]"/>
        <TouchableOpacity className="bg-rose-400 mx-4 absolute rounded-full flex justify-center items-center" style={{height:hp(5.5),width:hp(5.5),marginTop:hp(6)}} onPress={()=>router.back()}>
            <Ionicons name="arrow-back-circle-outline" size={hp(4)} color="white" />
        </TouchableOpacity>
        {/* exercises */}
        <View className="mx-4 space-y-3 mt-4">
          <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-700">{item.name} exercises</Text>
          <View className="mb-10">
            <ExerciseList data={exercises}/>
          </View>
        </View>
    </ScrollView>
  )
}

export default Exercises