import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function Bio() {

    const [Description, setDescription] = useState('')
    console.log(Description)

    return (
        <View style={{ flex: 1 }}>

            <Text style={styles.Summary}>Edit summary</Text>

            <Text style={styles.Desc}>Description</Text>

            <TextInput
                style={styles.Input}
                multiline={true}
                placeholder='Enter bio'
                value={Description}
                onChangeText={(Description) => setDescription(Description)}
            ></TextInput>

        </View>
    )
}

const styles = StyleSheet.create({

    Summary: {
        color: '#432344',
        fontSize: 20,
        fontWeight: 'normal',
        marginStart: '5%',
        marginTop: '15%'
    },

    Desc: {
        marginTop: '10%',
        marginStart: '5%',
        color: 'black'
    },

    Input: {
        borderBottomWidth: 1,
        width: '90%',
        marginStart: '5%',
        marginTop: '5%'
    }
})
