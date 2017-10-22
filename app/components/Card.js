import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Image,
} from 'react-native'

const Card = () => {
    return (
        <View>
        <View style={styles.top}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 100,
        flex: 1
    },
    top: {
        overflow: 'hidden',
        backgroundColor: 'white',
        margin: 10,
        marginTop: 100,
        marginBottom: 100,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 8
    }
})

export default Card;