import { NavigationHelpersContext } from '@react-navigation/core'
import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import SignUpScreen from './SignUpScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const RegisterScreen = ({ navigation }) => {

    const [refCode, setRefCode] = useState("");

    function statehandler(text){
        setRefCode(text)
        console.log("state changed:",text)
    }

    function verifyReferral(code) {
        fetch('https://us-central1-kibi-sports-backend.cloudfunctions.net/app/user/validate-invite', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                invite_code: code
            })
        }).then(data => {
            console.log("success")
            data.json().then(res=>{
                // console.log(res)
                if(res.message!="Invite Code is Valid")
                    console.log("inValid code");
                else
                    console.log("valid code");
                navigation.navigate("SignUpScreen")
            })
        }).catch(err=>{
            //Handel error accordingly
            console.log(err)
        })
    }

    return (
        <View style={style.container}>
            <Image
                source={require('../assets/images/Logo2.png')}
                style={style.logo} />
            <Text style={style.text}>Welcome!</Text>
            <FormInput
                placeholderText="Enter Refer Code" setValue={statehandler}/>
            <FormButton
                buttonTitle="Submit"
                // onPress={()=>navigation.navigate("SignUpScreen")} 
                onPress={() => verifyReferral(refCode)

            }
            />

            <Text style={style.Text}>KIBI Sports App is currently an invite only app.
              You can get a referral code from an existing user or Request an Invite Code</Text>

            <TouchableOpacity style={style.invite}>
                <Text style={style.inviteText}>Request an Invite Code</Text>
            </TouchableOpacity>
        </View>
    )
}
export default RegisterScreen;
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
            marginTop: 40,
            height: 150,
            width: 150,
            resizeMode: 'cover'
        },
        text: {
            marginTop: 30,
            marginBottom: 30,
            fontSize: 30,
            color: '#432344'
        },
        Text: {
            marginTop: 150,
            fontSize: 12,
            color: '#333'
        },
        invite: {
            borderBottomWidth: 1
        },
        inviteText: {
            marginTop: 30,
            color: '#432344',
            fontSize: 16
        },
        Input: {

        }
    }
)