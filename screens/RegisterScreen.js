import { NavigationHelpersContext } from '@react-navigation/core'
import React from 'react'
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated'
import FormButton from '../components/FormButton'
import FormInput from '../components/FormInput'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const RegisterScreen =({navigation})=>{
    return(
          <View style={style.container}>
              <Image
              source={require('../assets/images/Logo2.png')}
              style={style.logo}/>
              <Text style={style.text}>Welcome!</Text>
              <FormInput
              placeholderText="Enter Refer Code" />
              <FormButton  
              buttonTitle="Submit"
              onPress={()=>navigation.navigate('SignUpScreen')} />

              <Text style={style.Text}>KIBI Sports App is currently an invite only app. 
              You can get a referral code from an existing user or Request an Invite Code</Text>

              <TouchableOpacity style={style.invite}>
                  <Text style={style.inviteText}>Request an Invite Code</Text>
              </TouchableOpacity>
          </View>
    )
}
export default RegisterScreen;
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
            marginTop:40,
            height:150,
            width:150,
            resizeMode: 'cover'
        },
        text:{
          marginTop:30,
          marginBottom:30,
          fontSize:30,
          color:'#432344'
        },
        Text:{
            marginTop:150,
            fontSize:12,
            color:'#333'
          },
       invite:{
       borderBottomWidth:1
       },
        inviteText:{
            marginTop:30,
            color:'#432344',
            fontSize:16
        },
        Input:{
            
        }
    }
)