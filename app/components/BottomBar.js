import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { List, ListItem } from 'react-native-elements'

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },

]

const BottomBar = () => {
    return ( <List containerStyle={{marginBottom: 20}}>
            {
                list.map((l, i) => (
                    <ListItem
                        hideChevron={true}
                        roundAvatar
                        avatar={{uri:l.avatar_url}}
                        key={i}
                        title={l.name}
                        subtitle={l.subtitle}
                    />
                ))
            }
        </List>

    )

};


export default BottomBar;