import { View, Text, Image } from 'react-native';
import React from 'react';
import { sliderImages } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';

const ItemCard = ({ item }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' ,width:hp(50),height:hp(25)}}>
      <Image
        source={item}
        style={{
          width: wp('100%'),
          height: hp('30%'),
          borderRadius: 30,
          resizeMode: 'cover',
        }}
      />
    </View>
  );
};

const ImageSlider = () => {
  const progress = useSharedValue(0);

  return (
      <Carousel
        autoPlayInterval={2000}
        data={sliderImages}
        autoPlay={true}
        height={hp('50%')}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        width={wp('100%')}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        onProgressChange={(offset, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
        renderItem={({ item }) => <ItemCard item={item} />}
      />
    
  );
};

export default ImageSlider;
