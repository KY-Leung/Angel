import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { Avatar } from 'react-native-elements'

class AvaterIcon extends Component {
    render() {
        const props = this.props;
        const cellId = ("" + props.rowIndex + props.colIndex);

        return (
            <View>
                <Avatar
                    xlarge
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
    }
});

export default AvaterIcon;
