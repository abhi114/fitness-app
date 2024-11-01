import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodyPart } from './exerciseDb'
import { dummyExcersies } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'

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
        <TouchableOpacity className="bg-rose-500 mx-4 absolute rounded-full">
            
        </TouchableOpacity>
    </ScrollView>
  )
}

export default Exercises