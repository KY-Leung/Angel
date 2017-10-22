import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native'

const total = "$213.20";
const balance = "$0.00";

const SubsidyPage = () => {
  return (
      <FlatList>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text>Total Bill: </Text>
              <Text style={{fontColor: "orange", }}>{{total}}</Text>
          </View>
      </FlatList>
  );
};

export default SubsidyPage;