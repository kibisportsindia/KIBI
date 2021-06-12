import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native'
import FormButton from '../components/FormButton'

export default function ProfileDetails() {

  const [name, onChangeName] = React.useState('')
  const [age, onChangeAge] = React.useState('')
  const [location, onChangeLocation] = React.useState('')

  return (
    <View>
      <Text style={styles.heading}> Add profile details </Text>

      <TextInput
        style={styles.inputName}
        placeholder="Name"
        value={name}
        onChangeText={onChangeName}></TextInput>

      <TextInput
        style={styles.input}
        value={age}
        keyboardType="number-pad"
        onChangeText={onChangeAge}
        placeholder="Age"></TextInput>

      <TextInput
        style={styles.input}
        onChangeText={onChangeLocation}
        value={location}
        placeholder="Location"></TextInput>

      <TextInput
        style={styles.input}
        placeholder="Role"></TextInput>

      <FormButton buttonTitle="Next"></FormButton>

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
