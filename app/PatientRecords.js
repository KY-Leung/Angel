import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import AvaterIcon from './components/AvaterIcon'
import CardView from './components/CardView'

const PatientRecords = () => {
    return (
        <ScrollView contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'center'}} style={styles.container}>
            <AvaterIcon/>
            <CardView/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
});

export default PatientRecords;
