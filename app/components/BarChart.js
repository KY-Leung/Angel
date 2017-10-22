import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

const BarChart = () => {
    return (

        <View style={{flex: 1, flexDirection: 'column', marginTop:16, marginLeft:32}}>

            <View style={{width: 300, height: 24, backgroundColor: 'steelblue', marginTop:2}}>
                <Text style={{color: 'white'}}> 30% Vaccination </Text>
            </View>

            <View style={{width: 220, height: 24, backgroundColor: 'skyblue', marginTop:2}}>
                <Text style={{color: 'white'}}> 20% Medication </Text>
            </View>

            <View style={{width: 240, height: 24, backgroundColor: 'steelblue', marginTop:2}}>
                <Text style={{color: 'white'}}> 23% Surgeory </Text>
            </View>

            <View style={{width: 130, height: 24, backgroundColor: 'skyblue', marginTop:2}}>
                <Text style={{color: 'white'}}> 7% Specialist </Text>
            </View>

            <View style={{width: 100, height: 24, backgroundColor: 'steelblue', marginTop:2}}>
                <Text style={{color: 'white'}}> 5% Maternity </Text>
            </View>

            <View style={{width: 150, height: 24, backgroundColor: 'powderblue', marginTop:2}}>
                <Text style={{color: 'white'}}> 10% Screening </Text>
            </View>

            <View style={{width: 100, height: 24, backgroundColor: 'steelblue', marginTop:2}}>
                <Text style={{color: 'white'}}> 5% Emergency </Text>
            </View>

        </View>
    );
}

export default BarChart;