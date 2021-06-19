import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import auth from '@react-native-firebase/auth'
import { UserContext } from "../Context/UserContext"

const LoginScreen = (props) => {

  const [user, setUser] = useContext(UserContext)

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
    })
  }

  return (
    <>
      <View style={style.container}>
        <Image
          source={require('../assets/images/Logo2.png')}
          style={style.logo} />
        <Text style={style.text}>Sign In</Text>
        <FormInput
          placeholderText="Enter Mobile Number" setValue={statehandler}/>
        <FormButton
        buttonTitle="Get OTP" onPress={() => {
          triggerOTP()
        }} />
        <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
          <View>
            <Text style={{ width: 30, textAlign: 'center', color: 'gray' }}>OR</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'gray' }} />
        </View>
        <TouchableOpacity style={style.connectionButton} onPress={() => onclickGoogleLogin()}>
          <Image source={require('../assets/images/google-logo.png')}
            style={{
              width: 25,
              height: 25,
            }} /><Text style={style.connectionButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.registerButton} onPress={() =>
          props.navigation.navigate('RegisterScreen')}>
          <Text style={style.registerButtonText}>Don't Have An Account? Register Here</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default LoginScreen;

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
      borderWidth: 0.8,
      borderColor: 'gray',
      borderRadius: 5,
      alignSelf: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.5,
      shadowRadius: 1.41,
      alignSelf: 'center',
      marginTop: 30,
      width: '60%',
      padding: 7,
      fontWeight: '600',
      letterSpacing: 2
    },
    registerButton: {
      marginTop: 85,
      fontSize: 22,
      marginBottom: 5
    },
    registerButtonText: {
      color: '#432344',
      fontSize: 16
    },
    Input: {

    }
  }
)