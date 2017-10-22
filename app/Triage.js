import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import BottomBar from './components/BottomBar'


const Triage = () => {
    return (
        <View>
            <BottomBar/>
        </View>
    );
}


export default Triage;
