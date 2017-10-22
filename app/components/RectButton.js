import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-elements';

const RectButton = (props) => {
    return (
        <View style = {{width: 150, height: 50}}>
            <Button backgroundColor = 'steelblue' title={props.title} />
        </View>
    );
}


export default RectButton;