import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default function Education() {

    const [School, setSchool] = useState('')
    const [Degree, setDegree] = useState('')
    const [StartDate, setStartDate] = useState('')
    const [EndDate, setEndDate] = useState('')
    const [Grade, setGrade] = useState('')
    const [Activities, setActivities] = useState('')
    const [Description, setDescription] = useState('')

    console.log(School)
    console.log(Degree)
    console.log(StartDate)
    console.log(EndDate)
    console.log(Grade)
    console.log(Activities)
    console.log(Description)

    return (

        <View style={{ flex: 1 }}>
            <Text style={styles.heading}>School</Text>

            <TextInput style={styles.input}
                placeholder='Ex: Delhi University'
                value={School}
                onChangeText={(School) => setSchool(School)}></TextInput>

            <Text style={styles.heading}>Degree</Text>

            <TextInput style={styles.input}
                value={Degree}
                onChangeText={(Degree) => setDegree(Degree)}
                placeholder="Ex: Bacholer's"></TextInput>

            <Text style={styles.heading}>Start Date</Text>

            <TextInput style={styles.input}
                value={StartDate}
                onChangeText={(StartDate) => setStartDate(StartDate)}
                placeholder='Start date'></TextInput>

            <Text style={styles.heading}>End date</Text>

            <TextInput style={styles.input}
                value={EndDate}
                onChangeText={(EndDate) => setEndDate(EndDate)}
                placeholder='End date (or expected)'></TextInput>

            <Text style={styles.heading}>Grade</Text>

            <TextInput style={styles.input}
                value={Grade}
                onChangeText={(Grade) => setGrade(Grade)}
            ></TextInput>

            <Text style={styles.heading}>Activities and societies</Text>

            <TextInput style={styles.input}
                value={Activities}
                onChangeText={(Activities) => setActivities(Activities)}
                placeholder='Ex: Dance, Band'></TextInput>

            <Text style={styles.heading}>Description</Text>

            <TextInput style={styles.input}
                value={Description}
                onChangeText={(Description) => setDescription(Description)}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({

    heading: {
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
