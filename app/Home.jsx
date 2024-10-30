import { View, Text, Image, } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import ImageSlider from './ImageSlider';
import BodyParts from './BodyParts';
const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <StatusBar style='dark' />
      
      {/* Avatar and Header */}
      <View className="flex-row justify-between items-center mx-5 mt-5">
        <View className="space-y-2">
          <Text className="font-bold tracking-wider text-neutral-700" style={{ fontSize: hp(4) }}>Ready To</Text>
          <Text className="font-bold tracking-wider text-rose-500" style={{ fontSize: hp(3.5) }}>Workout</Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
          <Image source={require('../assets/images/avatar.png')} style={{ height: hp(6), width: hp(6) }} className="rounded-full" />
          <View className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300 mt-2">
            <Ionicons name="notifications-sharp" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/* Image Slider */}
      <View style={{ height: hp('30%'), marginTop: hp(2) ,marginTop:20}}>
        <ImageSlider />
      </View>

      {/* Body Parts Section */}
      <View className="flex-1 ">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}

export default Home