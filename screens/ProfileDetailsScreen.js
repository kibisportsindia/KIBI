import React,{Component} from 'react';
import {View,TextInput,StyleSheet,Text, ScrollView} from 'react-native';
import FormButton from '../components/FormButton';
import {Picker} from '@react-native-picker/picker';
var gender = [
    {label:"Male",value:0},
    {label:"Female",value:1},
    {label:"Others",value:2 }
]

export default class ProfileDetails extends Component{

    render(){
    return(
      <ScrollView>
        <View>

            <Text
            style={{
                fontSize:40,
                color:'purple',
                textAlign:'center',
                marginTop:60
            }}>Add profile details</Text>

            <TextInput
            style={{
                marginTop:40,
                borderColor:'gray',  
                borderWidth:1,
                height:50,
                margin:30,
                borderRadius:5,
                paddingHorizontal:10  
            }}
            placeholder="Name"
            ></TextInput>
                         
            <TextInput
            style={{
                marginTop:-10,
                borderColor:'gray',  
                borderWidth:1,
                height:50,
                margin:30,
                borderRadius:5,
                paddingHorizontal:10  
            }}
            keyboardType="email-address"
            placeholder="Email"
            
            ></TextInput>
            
            <TextInput
            style={{
                marginTop:-10,
                borderColor:'gray',  
                borderWidth:1,
                height:50,
                margin:30,
                borderRadius:5,
                paddingHorizontal:10  
            }}
            keyboardType="number-pad"
            placeholder="Age"
            ></TextInput>
            
            <TextInput
            style={{
                marginTop:-10,
                borderColor:'gray',  
                borderWidth:1,
                height:50,
                margin:30,
                borderRadius:5,
                paddingHorizontal:10  
            }}
            placeholder="Location"
            
            ></TextInput>
            <View  style={{borderWidth:1,width:"84%",marginLeft:30,marginRight:30,borderRadius:1,borderColor:"gray"}}>
            <Picker style={{borderWidth:1,height:60,width:260,marginLeft:30}}>
              <Picker.Item label="Select Role" value=""/>
              <Picker.Item label="General" value="General"/>
              <Picker.Item label="Athlete" value="Athelete"/>
              <Picker.Item label="Coach" value="Coach"/>
              <Picker.Item label="Sports Academy" value="Sports Academy"/>
              <Picker.Item label="Brand/Company" value="Company"/>              
              <Picker.Item label="Sports Staff" value="Sports staff"/>              

             </Picker>
             </View>
            
          
            <View style={{justifyContent:"center",alignItems:"center"}}>
        <FormButton
        onPress={()=>this.props.navigation.navigate('AddSocialAccount')}
            buttonTitle="Next"/>
            </View>
        </View>
        </ScrollView>
    );
}}
const styles = StyleSheet.create({
    viewStyle: {
      flex: 1,
      alignSelf: "center",
      flexDirection: "row",
      width: "92%",
      justifyContent: "space-between",
      alignItems: "center"
    },
    itemStyle: {
      marginTop:-10,
      fontSize: 10,
      fontFamily: "black",
      color: "black"
    },
   
    textStyle: {
      fontSize: 14,
      color:'gray',
      fontFamily: "Roboto-Regular"
    }
  });