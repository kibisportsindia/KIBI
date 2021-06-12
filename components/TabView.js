import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScrollButton from './ScrollButton'

export default function TabView({ status, button }) {
    return (
        <View>

            <View style={styles.view}>

                <Text style={styles.status}>{status}</Text>
                <ScrollButton buttonTitle={button} />

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        height: '98%',
        margin: 2,
    },

    text: {
        color: '#FFC000',
        fontSize: 20,
        marginTop: 10,
        alignSelf: 'center',
    },

    status: {
        color: 'gray',
        fontSize: 17,
        alignSelf: 'center',
        marginTop: '10%'
    },

})
