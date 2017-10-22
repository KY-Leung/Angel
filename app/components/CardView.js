import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import RectButton from './RectButton';

const users = [
    {
        name: 'brynnsdasdadsadsadsadsadsadsadsadsadas',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }
]

const CardView = (props) => {
    return (
        users.map((u, i) => {
            return (
                <Card key={i} title="CARD WITH DIVIDER" containerStyle={styles.containerStyle} featuredTitleStyle={{color: '#8f8f8f'}}>
                    <View style={{paddingTop: 10}}>
                        <Text>{u.name}</Text>
                    </View>
                    <View style={{paddingTop: 10, marginLeft: -16}}>
                        <RectButton title={'View more'}/>
                    </View>
                </Card>
            )
        })
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        alignContent: 'flex-start',
        width: '95%'
    }
});

export default CardView;
