import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Avatar } from 'react-native-elements'

class PatientDetails extends Component {
    render() {
        const props = this.props;
        const cellId = ("" + props.rowIndex + props.colIndex);

        return (
            <View style={styles.container}>
                <Avatar
                    xlarge
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
                <View style={styles.welcome}>
                    <Text>Arian Silvia</Text>
                    <Text>March7, 2003</Text>
                    <Text>Laura Silvia (Guardian)</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        height: 150,
        flexDirection: 'row',
        backgroundColor: '#8F8F8F',
    },
    welcome: {
        flex: 1,
        textAlign: 'left',
        justifyContent: 'center',
        margin: 10,
        color: '#000000',
    },
});

export default PatientDetails;
