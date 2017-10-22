import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView
} from 'react-native'

const total = "$213.20";
const balance = "$0.00";

const SubsidyPage = () => {
  return (
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text>Total Bill: </Text>
              <Text style={{color: "orange", }}>{total}</Text>
          </View>
  );
};

export default SubsidyPage;