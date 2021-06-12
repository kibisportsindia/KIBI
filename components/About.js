import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function About() {
    return (
        <ScrollView style={styles.view}>
            <TouchableOpacity styles={styles.touchable}>
            <Text style={styles.text}>Experience</Text>                
            </TouchableOpacity>

            <TouchableOpacity styles={styles.touchable}>
            <Text style={styles.text}>Awards/Recognitions</Text>
            </TouchableOpacity>

            <TouchableOpacity styles={styles.touchable}>
            <Text style={styles.text}>Coach</Text>                
            </TouchableOpacity>

            <TouchableOpacity styles={styles.touchable}>
            <Text style={styles.text}>Academy</Text>
            </TouchableOpacity>

            <TouchableOpacity styles={styles.touchable}>
            <Text style={styles.text}>Education</Text>
            </TouchableOpacity>

            <TouchableOpacity styles={styles.touchable}>
            <Text style={styles.text}>Interests</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    view: {
        flex: 1,
    },
    touchable:{
        backgroundColor:'red',
        flex:1
    },
    text: {
        color: '#432344',
        fontSize: 25,
        marginStart: '4%',
        marginTop: '6%'
    }
})
