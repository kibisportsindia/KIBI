import { useRoute } from '@react-navigation/core'
import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import FormButton from '../components/FormButton'
import LoginScreen from './LoginScreen'
import auth from '@react-native-firebase/auth'

export default class OtpLoginVerifyScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            pin1:"",
            pin2:"",
            pin3:"",
            pin4:"",
            pin5:"",
            pin6:"",
            confirmation:null,


        }
    }

   async componentDidMount(){   //Function to get parameters from th previous screen
        const confirmation=await this.props.navigation.getParam("confirmation")
        const phoneNumber= await this.props.navigation.getParam("phoneNumber")
        this.setState({confirmation:confirmation})     }
        confirmCode=async()=> {      //OtpVerification API Starts
            const{confirmation,pin1,pin2,pin3,pin4,pin5,pin6}= this.state
            console.log(confirmation)

       try {
          const result=await confirmation.confirm(pin1+pin2+pin3+pin4+pin5+pin6);
          alert(result)
          this.props.navigation.navigate("HomeScreen")
        } catch (error) {
          console.log('Invalid code.');
        }
      }                               //OTPVerification API ends

    render() {

        const {pin1,pin2,pin3,pin4,pin5,pin6}=this.state
        return (
            <>
            <View style={{justifyContent:"center",alignItems:"center",marginTop:80}}>
                <Text style={{fontSize:30,alignItems:"center",justifyContent:"center",color:"#432344"}}>Verify OTP</Text>
            </View>
           <View style={{flex:1,justifyContent:"space-evenly",flexDirection:"row",marginTop:50}}>
               <TextInput ref={"pin1ref"}
               onChangeText={(pin1)=>{
                   this.setState({pin1:pin1})
                   if(pin1!=""){
                       this.refs.pin2ref.focus()
                   }
                   else{
                       this.refs.pin1ref.focus()
                   }
               }}
               value={pin1}
               maxLength={1}
               style={{backgroundColor:"#f5f41",fontWeight:"600",alignSelf:"center",height:55,width:"10%",borderBottomEndRadius:10,borderBottomWidth:1,borderColor:"grey"}}/>

               <TextInput ref={"pin2ref"}
               onChangeText={(pin2)=>{
                   this.setState({pin2:pin2})
                   if(pin2!=""){
                    this.refs.pin3ref.focus()
                }
                }
                }
value={pin2}
                maxLength={1}
               style={{backgroundColor:"#f5f41",fontWeight:"600",alignSelf:"center",height:55,width:"10%",borderBottomEndRadius:10,borderBottomWidth:1,borderColor:"grey"}}/>
               
               <TextInput ref={"pin3ref"}
               onChangeText={(pin3)=>{
                   this.setState({pin3:pin3})
                   if(pin3!=""){
                    this.refs.pin4ref.focus()
                }}}
               value={pin3}
                maxLength={1}
               style={{backgroundColor:"#f5f41",fontWeight:"600",alignSelf:"center",height:55,width:"10%",borderBottomEndRadius:10,borderBottomWidth:1,borderColor:"grey"}}/>
               
               <TextInput ref={"pin4ref"}
               onChangeText={(pin4)=>{
                   this.setState({pin4:pin4})
                   if(pin4!=""){
                    this.refs.pin5ref.focus()
                }}}
               value={pin4}
                maxLength={1}
               style={{backgroundColor:"#f5f41",fontWeight:"600",alignSelf:"center",height:55,width:"10%",borderBottomEndRadius:10,borderBottomWidth:1,borderColor:"grey"}}/>
               
               <TextInput ref={"pin5ref"}
               onChangeText={(pin5)=>{this.setState({pin5:pin5})
               if(pin5!=""){
                this.refs.pin6ref.focus()
            }}}
               value={pin5}
                maxLength={1}
               style={{backgroundColor:"#f5f41",fontWeight:"600",alignSelf:"center",height:55,width:"10%",borderBottomEndRadius:10,borderBottomWidth:1,borderColor:"grey"}}/>
              
              <TextInput ref={"pin6ref"}
              onChangeText={(pin6)=>this.setState({pin6:pin6})}
              value={pin6}
               maxLength={1}
               style={{backgroundColor:"#f5f41",fontWeight:"600",alignSelf:"center",height:55,width:"10%",borderBottomEndRadius:10,borderBottomWidth:1,borderColor:"grey"}}/>
           </View>
           <View style={{ flex:1,justifyContent:"center",alignItems:"center"}}>
               <FormButton
               buttonTitle={"Verify"}
               onPress={()=>this.props.navigation.navigate('ProfileDetailsScreen')} />
           </View>
               </>
        )
    }

}
