import React,{useState} from 'react';
import {
    StyleSheet,
    Text, 
    View,
    TextInput,
    TouchableOpacity,
   
 } from 'react-native';
 import {Picker} from '@react-native-picker/picker';
 import DateTimePickerModal from "react-native-modal-datetime-picker";
 import { Icon } from 'react-native-elements'
 import FormButton from '../components/FormButton';

 const RegisterEventBasicDetails = (props) =>{
     const [eventName,setEventName] = useState('');
     const [indate,setDate] = useState('Start date');
     const [location,setLocation] = useState('');
     const [SportsCategory,setSportsCategory] = useState('');
     const [AgeCategory,setAgeCategory] = useState('');
     const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

     const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        const year = date.getFullYear();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const mm = months[date.getMonth()];        
        const dd = date.getDate();
        const startDate = mm + " "+ dd + ", " + year;        
        setDate(startDate);
        hideDatePicker();
      };
    return(
        <View>
            <View style={styles.headingView}>
                <Text style = {styles.heading}>Enter basic Details</Text>
            </View>
            <View style={styles.introLineView}>
                <Text style={styles.introLine}>
                Details provided will be verfied
                </Text>
            </View>
            <View style={styles.formView}>
            <TextInput
            style={styles.formTextInput}  placeholder="Name"
            value={eventName} 
            onChangeText={(eventName)=>setEventName(eventName)}></TextInput>

            <TouchableOpacity style={styles.dateButton}  onPress={showDatePicker}  >
            <Text style = {{color:'#767D86',
                    flex:0.95,
                    left:10
                    }}>{indate}</Text>
            <Icon name='calendar'
                  type='entypo'
                  color='#432344'
            />
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                minimumDate={new Date()}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            <View  style={styles.locationView}> 

            <TextInput style={{flex:0.95,left:10}}
             placeholder="Location"
             value={location}
             onChangeText={(location)=>setLocation(location)}></TextInput> 
              <Icon
               name='my-location'
               type='MaterialIcons'
               color='#432344'
            />
            </View>            
            
            <View
            style={styles.formTextInput} >
              <Picker style={{height:45,width:'100%',color:'#767D86',alignSelf:'center'}}
              selectedValue={SportsCategory} onValueChange={(SportsCategory)=>setSportsCategory(SportsCategory)}>
              <Picker.Item label="Sports Category" value=""/>
              <Picker.Item label="Arm-Wrestling" value="Arm-Wrestling"/>
              <Picker.Item label="Badminton" value="Badminton"/>
              <Picker.Item label="Basketball" value="Basketball"/>
              <Picker.Item label="Boxing" value="Boxing"/>
              <Picker.Item label="Archery" value="Archery"/>              
              <Picker.Item label="Cricket" value="Cricket"/>
              </Picker>
            </View>
            <View
            style={styles.formTextInput} >
              <Picker style={{height:45,width:'100%',color:'#767D86',alignSelf:'center'}}
              selectedValue={AgeCategory} onValueChange={(AgeCategory)=>setAgeCategory(AgeCategory)}>
              <Picker.Item label="Age Category" value=""/>
              <Picker.Item label="Below 10" value="Below 10"/>
              <Picker.Item label="11-18" value="11-18"/>
              <Picker.Item label="Above 18" value="Above 18"/>
              <Picker.Item label="Above 25" value="Above 25"/>
              </Picker>
            </View>
            </View>
            <View style={{ top:580,justifyContent:"center",alignItems:"center"}}>
            <FormButton
                buttonTitle="Next"
                onPress={() => props.navigation.navigate("RegisterEventAdditionalDetails" ,{
                    eventName,
                    indate,
                    location,
                    SportsCategory,
                    AgeCategory
                  })}/>
            </View>
        </View>
    )
 }

 const styles = StyleSheet.create({
    headingView:{
        position:'absolute',
        width:'100%',
        height:45,
        left:18,
        top:70
    } ,
    heading:{
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'600',
        fontSize:24,
        lineHeight:40,
        color:"#432344"
    },
    introLineView:{
        position: 'absolute',
        width: 338.43,
        height: 63,
        left: 18,
        top: 120
    },
    introLine:{
        fontFamily:'Poppins',
        fontStyle:'normal',
        fontWeight:'normal',
        fontSize:16,
        lineHeight:21,
        color:'#767D86'
    },
    dateButton:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        width:'90%',
        borderColor:'gray',  
        borderWidth:1,
        height:55,
        marginBottom:20,
        borderRadius:5,
    },
    locationView:{                  
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        width:'90%',
        borderColor:'gray',  
        borderWidth:1,
        height:55,
        marginBottom:20,
        borderRadius:5,
  },
    formView:{
        position: 'absolute',
        left: 18,
        top: 210,
        width:'100%'       
    },
    formTextInput:{
        width:'90%',
        backgroundColor:'white',
        borderColor:'gray',  
        borderWidth:1,
        height:58,
        marginBottom:20,
        borderRadius:5,
        paddingHorizontal:10  
    }
 });

 export default RegisterEventBasicDetails;