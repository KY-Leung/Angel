import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const AddButton = (props) => {
    return (
        <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
            <ActionButton buttonColor="steelblue">
                <ActionButton buttonColor='steelblue' title="New Task" onPress={() => console.log("notes tapped!")}>
                    <Icon name="md-create" style={styles.actionButtonIcon} />
                </ActionButton>
            </ActionButton>
        </View>
    );
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        marginTop: 10,
        fontSize: 20,
        height: 80,
        color: 'white',
    },
});

export default AddButton;