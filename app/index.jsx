import { View, Text } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { Video } from 'expo-av';
import { useWindowDimensions } from 'react-native';

const Index = () => {
    const router = useRouter();
    const { width, height } = useWindowDimensions();

    return (
        <View className='flex-1 flex justify-end'>
            <StatusBar style='light'/>
            
            {/* Background Video */}
            <Video
                source={{uri:'https://firebasestorage.googleapis.com/v0/b/travelinfo-6a043.appspot.com/o/signatures%2Fsamplevideo%2F855828-hd_1920_1080_30fps.mp4?alt=media&token=9ada6ce7-8200-4c47-bf67-9422b936ad45'}} // Make sure to add your video file
                resizeMode="cover"
                shouldPlay
                isLooping
                isMuted
                style={{
                    width: width,
                    height: height,
                    position: 'absolute',
                }}
            />

            <LinearGradient 
                colors={['transparent', '#18181b']} 
                style={{width: wp(100), height: hp(70)}} 
                start={{x: 0.5, y: 0}} 
                end={{x: 0.5, y: 0.8}} 
                className="flex justify-end pb-12 space-y-8"
            >
                <Animated.View 
                    entering={FadeInDown.delay(100).springify()} 
                    className="flex items-center"
                >
                    <Text 
                        className="text-white font-bold tracking-wide" 
                        style={{fontSize: hp(5)}}
                    >
                        Best <Text className="text-rose-500">Workouts</Text>
                    </Text>
                    <Text 
                        className="text-white font-bold tracking-wide" 
                        style={{fontSize: hp(5)}}
                    >
                        For You
                    </Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200).springify()}>
                    <TouchableOpacity 
                        style={{height: hp(7), width: hp(30)}} 
                        className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200" 
                        onPress={() => router.push('Home')}
                    >
                        <Text 
                            style={{fontSize: hp(3)}} 
                            className="text-white font-bold tracking-wide"
                        >
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    );
};

export default Index;