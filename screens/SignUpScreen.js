import { NavigationHelpersContext } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './RegisterScreen';
import { UserContext } from "../Context/UserContext"
import { useEffect, useContext } from 'react'


const SignUpScreen = (props) => {

  const [user, setUser] = useContext(UserContext)
  // const user = useContext(UserContext)

  // useEffect(() => {
  //   console.log("value from state:", user)
  // }, []);

  onclickGoogleLogin = () => {
    props.navigation.navigate("LoginScreen")
  }

  function statehandler(text) {
    console.log("old state:", user)
    setUser({ ...user, "number": text })
    console.log("latest state:", user)
  }

  function triggerOTP() {
    console.log("in trigger OTP:",user.number)
    fetch('https://us-central1-kibi-sports-backend.cloudfunctions.net/app/user/send-otp', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone: user.number
      })
    }).then(data => {
      console.log("success")
      console.log("OTP send successfully")
      props.navigation.navigate('OtpVerificationScreen')
    }).catch(err=>{
      console.log(err)
    })
    // props.navigation.navigate('OtpVerificationScreen')
  }
  return (
    <View style={style.container}>
      <Image
        source={require('../assets/images/Logo2.png')}
        style={style.logo} />
      <Text style={style.text}>Sign Up</Text>
      <FormInput
        placeholderText="Enter Mobile Number"
        setValue={statehandler}
        keyboardType="numeric" />
      <FormButton
        buttonTitle="Get OTP" onPress={() => {
          triggerOTP()
        }}

      />
      <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, height: 0.5, backgroundColor: 'gray' }} />
        <View>
          <Text style={{ width: 30, textAlign: 'center', color: 'gray' }}>OR</Text>
        </View>
        <View style={{ flex: 1, height: 0.5, backgroundColor: 'gray' }} />
      </View>
      <TouchableOpacity style={style.connectionButton} onPress={() => onclickGoogleLogin()}>
        <Image source={require('../assets/images/google-logo.png')}
          style={{
            width: 25,
            height: 25,
          }} /><Text style={style.connectionButtonText}>Sign up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.registerButton} onPress={() => props.navigation.navigate('LoginScreen')}>
        <Text style={style.registerButtonText}>Already a User? Sign In here</Text>
      </TouchableOpacity>

    </View>
  )
}
export default SignUpScreen;
const style = StyleSheet.create(
  {
    container: {
      marginTop: 10,
      backgroundColor: '#ffffff',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },

    logo: {
      marginTop: 50,
      height: 150,
      width: 150,
      resizeMode: 'cover'
    },
    navButton: {
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5'
    },
    text: {
      marginTop: 30,
      marginBottom: 30,
      fontSize: 30,
      color: '#432344'
    },
    connectionButtonText: {
      fontSize: 15,
      color: 'gray',
      fontWeight: '700',
      position: 'absolute',
      marginLeft: 40,
      padding: 7


    },
    connectionButton: {
      backgroundColor: 'white',
      borderWidth: 0.7,
      borderColor: 'gray',
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 1.41,
      alignSelf: 'center',
      marginTop: 25,
      width: '60%',
      padding: 7,
      fontWeight: '600',
      letterSpacing: 2
    },
    registerButton: {
      marginTop: 85,
      fontSize: 22,
    },
    registerButtonText: {
      color: '#432344',
      fontSize: 16
    },
    Input: {

    }
  }
)