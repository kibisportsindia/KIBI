import React from 'react'
import { View, Text, Button, StyleSheet,Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { color } from 'react-native-reanimated';

const OnboardingScreen = ({navigation}) => {
    return(
        <Onboarding 
        onDone={() => navigation.navigate("LoginScreen")}
        onSkip={()=>navigation.replace("LoginScreen")}
       
  pages={[
    {
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../assets/images/Onboarding.png')} />,
      title: 'We Help You Get Better',
      subtitle: 'No Matter What Sport You Play',
    },
    {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../assets/images/Onboarding2.png')} />,
        title: 'Learn .Grow .Accelarate',
        subtitle: 'Detailed stats on How You Play and How to Improve',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/images/Onboarding3.jpg') } style={{}} />,
        title: 'A Complete Platform to Stay Connected Favourite Sport',
        subtitle: 'A Closed Sports Community Social Platform',
      },
  ]}
/>
    );
};
export default OnboardingScreen;
