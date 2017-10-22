import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native'

const total = "$213.20";
const balance = "$0.00";
const listitemstyle = {
    height: "24px", width: "100%", padding: "8px",
    backgroundColor: "grey", paddingBottom: "8px", paddingTop: "8px"
};

const SubsidyPage = () => {
  return (
      <FlatList>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text>Total Bill: </Text>
              <Text style={{fontColor: "orange", fontWeight: 'bold', fontSize: "20"}}>{total}</Text>
          </View>
          <FlatList>
              <View style={listitemstyle}><Text>#128329101921 CA, USA</Text></View>
              <View style={listitemstyle}><Text>#231909219244 SH, CN</Text></View>
              <View style={listitemstyle}><Text>#532124895014 PAR, FR</Text></View>
              <View style={listitemstyle}><Text>#908021211811 SG, SG</Text></Viewstyle>
          </FlatList>
      </FlatList>
  );
};

export default SubsidyPage;