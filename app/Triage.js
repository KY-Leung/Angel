import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';
import CardView from './components/CardView'
import CardViewNoButton from "./components/CardViewNoButton"

const Triage = () => {
    return (
        <ScrollView contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'center'}} style={styles.container}>
            <CardViewNoButton/>
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
