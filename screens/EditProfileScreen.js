import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import SaveButton from '../components/SaveButton'
export default function EditProfileScreen() {

    const [Name, setName] = useState('')
    const [Category, setCategory] = useState('')
    const [Sport, setSport] = useState('')
    const [Location, setLocation] = useState('')
    const [Status1, setStatus1] = useState('')
    const [Status2, setStatus2] = useState('')

    return (
        <View>
            <Text style={styles.text}>Edit your name</Text>

            <TextInput
                style={styles.input}
                value={Name}
                onChangeText={() => setName()}
                placeholder="Enter name"></TextInput>

            <Text style={styles.text}>Enter category</Text>

            <TextInput
                style={styles.input}
                value={Category}
                onChangeText={() => setCategory()}
                placeholder="Category"></TextInput>

            <Text style={styles.text}>Change your sport</Text>

            <TextInput
                style={styles.input}
                value={Sport}
                onChangeText={() => setSport()}
                placeholder="Enter sport"></TextInput>

            <Text style={styles.text}>Change your location</Text>

            <TextInput
                style={styles.input}
                value={Location}
                onChangeText={() => setLocation()}
                placeholder=" Enter location"></TextInput>

            <Text style={styles.text}>Edit your main status</Text>

            <TextInput
                style={styles.input}
                value={Status1}
                onChangeText={() => setStatus1()}
                placeholder="Enter main status"></TextInput>

            <Text style={styles.text}>Edit sub status</Text>

            <TextInput
                style={styles.input}
                value={Status2}
                onChangeText={() => setStatus2()}
                placeholder="Enter sub status"></TextInput>

            <SaveButton
                buttonTitle="Save details"
            />
        </View>




    )
}

const styles = StyleSheet.create({
    text: {
        color: '#432344',
        fontSize: 15,
        marginStart: '5%',
        marginTop: '8%'
    },

    input: {
        borderBottomColor: 'black',
        borderBottomWidth: .5,
        width: '90%',
        marginStart: '5%'
    }
})
