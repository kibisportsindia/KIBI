import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function ContributeScreen() {

    const [Link, setLink] = useState('')
    const [Description, setDescription] = useState('')

    console.log(Link)
    console.log(Description)

    return (
        <View>
            <Text style={styles.contri}>Contribute:-</Text>

            <Text style={styles.head}>Link</Text>

            <TextInput
                style={styles.Input}
                placeholder="Enter your link "
                value={Link}
                onChangeText={(Link) => setLink(Link)}></TextInput>

            <Text style={styles.head}>Description</Text>

            <TextInput
                style={styles.Description}
                placeholder="Enter description "
                multiline={true}
                value={Description}
                onChangeText={(Description) => setDescription(Description)}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({

    contri: {
        color: '#432344',
        fontSize: 20,
        fontWeight: 'normal',
        marginStart: '5%',
        marginTop: '15%'
    },

    head: {
        marginTop: '10%',
        marginStart: '5%',
        color: 'black'
    },

    Input: {
        borderBottomWidth: 1,
        width: '90%',
        marginStart: '5%',
        marginTop: '5%'
    },

    Description: {
        borderBottomWidth: 1,
        width: '90%',
        marginStart: '5%',
        marginTop: '5%',
    }
})
