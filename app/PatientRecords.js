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
import Icon from 'react-native-fa-icons';

const PatientRecords = () => {
    return (
        <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'center'}} style={styles.container}>
                <AvaterIcon/>
                <CardView/>
            </ScrollView>
            <View>
                <Icon name='circle' allowFontScaling style={styles.circleStyle} />
                <Icon name='plus' allowFontScaling style={styles.plusStyle}  onPress={() => Actions.triage()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'lightgrey',
    },
    circleStyle: {
        position: 'absolute',
        right: 24,
        bottom: 24,
        fontSize: 90,
        color: 'green'
    },
    plusStyle: {
        position: 'absolute',
        right: 50,
        bottom: 50,
        fontSize: 32,
        color: 'white'
    }
});

export default PatientRecords;
