import { NavigationHelpersContext } from '@react-navigation/core'
import React from 'react'
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated'
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './RegisterScreen'


const LoginScreen =({navigation})=>{
    return(
          <View style={style.container}>
              <Image
              source={require('../assets/images/Logo2.png')}
              style={style.logo}/>
              <Text style={style.text}>Sign Up</Text>
              <FormInput
              placeholderText="Enter Mobile Number"
              keyboardType="numeric" />
              <FormButton
              buttonTitle="Get OTP"
              onPress={()=>navigation.navigate('OtpVerificationScreen')} />

              <TouchableOpacity style={style.registerButton} onPress={()=> navigation.navigate('LoginScreen')}>
                  <Text style={style.registerButtonText}>Already a User? Sign In here</Text>
              </TouchableOpacity>

          </View>
    )
}
export default LoginScreen;
const style=StyleSheet.create(
    {
        container:{
            marginTop:10,
            backgroundColor:'#ffffff',
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            padding:20,
        },

        logo:{
            marginTop:50,
            height:150,
            width:150,
            resizeMode: 'cover'
        },
        navButton:{
        },
        navButtonText:{
             fontSize:18,
             fontWeight:'500',
             color: '#2e64e5'
        },
        text:{
          marginTop:30,
          marginBottom:30,
          fontSize:30,
          color:'#432344'
        },
        registerButton:{
            marginTop:200,
            fontSize:22,
        },
        registerButtonText:{
            color:'#432344',
            fontSize:16
        },
        Input:{
            
        }
    }
)