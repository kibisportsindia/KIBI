import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native'
import NextPfDetailsBtn from '../components/NextPfDetailsBtn'

export default function ProfileDetails() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [location, setLocation] = useState('')
  const [role, setRole] = useState('')

  console.log(name)
  console.log(age)
  console.log(location)
  console.log(role)

  return (
    <View>
      <Text style={styles.heading}> Add profile details </Text>

      <TextInput
        style={styles.inputName}
        placeholder="Name"
        value={name}
        onChangeText={(name) => setName(name)}></TextInput>

      <TextInput
        style={styles.input}
        value={age}
        keyboardType="number-pad"
        onChangeText={(age) => setAge(age)}
        placeholder="Age"></TextInput>

      <TextInput
        style={styles.input}
        onChangeText={(location) => setLocation(location)}
        value={location}
        placeholder="Location"></TextInput>

      <TextInput
        style={styles.input}
        value={role}
        onChangeText={(role) => setRole(role)}
        placeholder="Role"></TextInput>

      <NextPfDetailsBtn buttonTitle="Next"></NextPfDetailsBtn>

    </View>

  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    color: '#432344',
    alignSelf: 'center',
    marginTop: '15%',
  },
  input: {
    marginTop: '-2%',
    borderColor: 'gray',
    borderWidth: 1,
    height: '10%',
    margin: 30,
    borderRadius: 5,
    paddingHorizontal: '3%',
    backgroundColor: '#fff'
  },

  inputName: {
    backgroundColor: '#fff',
    marginTop: '10%',
    borderColor: 'gray',
    borderWidth: 1,
    height: '10%',
    margin: 30,
    borderRadius: 5,
    paddingHorizontal: '3%',
  }
});
