import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';
import CardView from './components/CardView'
import CardViewNoButton2 from "./components/CardViewNoButton2"

const Triage = () => {
    return (
        <ScrollView contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'center'}} style={styles.container}>
            <CardViewNoButton2/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'lightgrey',
    }
});

export default Triage;
