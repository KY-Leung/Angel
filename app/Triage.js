import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View
} from 'react-native';
import CardView from './components/CardView'
import CardViewNoButton from "./components/CardViewNoButton"
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const Triage = () => {
    return (
        <ScrollView contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'center'}} style={styles.container}>
            <CardViewNoButton/>
            <View style = {{top: 16, bottom: 16, width: 150, height: 50}}>
                <Button backgroundColor = 'steelblue' title={'Next  >'} onPress={() => Actions.bill()}/>
            </View>
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
