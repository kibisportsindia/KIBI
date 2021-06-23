import React, {useContext} from 'react';
import {View, TextInput, StyleSheet, Text, ScrollView} from 'react-native';
import FormButton from '../components/FormButton';
import {Picker} from '@react-native-picker/picker';
import {UserContext} from '../Context/UserContext';
var gender = [
  {label: 'Male', value: 0},
  {label: 'Female', value: 1},
  {label: 'Others', value: 2},
];

const ProfileDetails = props => {
  const [user, setUser] = useContext(UserContext);
  // console.log("User state in profileDetails:",user)

  function statehandler(key, value) {
    // console.log("key:",key,"value:",value)
    // console.log("old state:", user)
    setUser({...user, [key]: value});
    // console.log("latest state:", user)
  }

  function signUp() {
    console.log('SignUp:', {...user});
    fetch(
      'https://us-central1-kibi-sports-backend.cloudfunctions.net/app/user/signup',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...user}),
      },
    )
      .then(data => {
        data.json().then(res => {
          console.log('SignUp response:', res);
        });
        // props.navigation.navigate('AddSocialAccount')
      })
      .catch(err => {
        console.log('error occured:' + err);
      });
  }

  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 40,
            color: 'purple',
            textAlign: 'center',
            marginTop: 60,
          }}>
          Add profile details
        </Text>

        <TextInput
          style={{
            marginTop: 40,
            borderColor: 'gray',
            borderWidth: 1,
            height: 50,
            margin: 30,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          placeholder="Name"
          onChangeText={e => {
            statehandler('name', e);
          }}></TextInput>

        <TextInput
          style={{
            marginTop: -10,
            borderColor: 'gray',
            borderWidth: 1,
            height: 50,
            margin: 30,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={e => {
            statehandler('email', e);
          }}></TextInput>

        <TextInput
          style={{
            marginTop: -10,
            borderColor: 'gray',
            borderWidth: 1,
            height: 50,
            margin: 30,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          keyboardType="number-pad"
          placeholder="Age"
          onChangeText={e => {
            statehandler('age', e);
          }}></TextInput>

        <TextInput
          style={{
            marginTop: -10,
            borderColor: 'gray',
            borderWidth: 1,
            height: 50,
            margin: 30,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          placeholder="Location"
          onChangeText={e => {
            statehandler('location', e);
          }}></TextInput>
        <View
          style={{
            borderWidth: 1,
            width: '84%',
            marginLeft: 30,
            marginRight: 30,
            borderRadius: 1,
            borderColor: 'gray',
          }}>
          <Picker
            style={{borderWidth: 1, height: 60, width: 260, marginLeft: 30}}
            onValueChange={val => {
              statehandler('role', val);
            }}>
            <Picker.Item label="Select Role" value="" />
            <Picker.Item label="General" value="General" />
            <Picker.Item label="Athlete" value="Athelete" />
            <Picker.Item label="Coach" value="Coach" />
            <Picker.Item label="Sports Academy" value="Sports Academy" />
            <Picker.Item label="Brand/Company" value="Company" />
            <Picker.Item label="Sports Staff" value="Sports staff" />
          </Picker>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <FormButton onPress={() => signUp()} buttonTitle="Next" />
        </View>
      </View>
    </ScrollView>
  );
};
export default ProfileDetails;
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    width: '92%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemStyle: {
    marginTop: -10,
    fontSize: 10,
    fontFamily: 'black',
    color: 'black',
  },

  textStyle: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Roboto-Regular',
  },
});
