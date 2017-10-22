import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const total = "$213.20";
const balance = "$0.00";
const listitemstyle = {
    height: 48,
    backgroundColor: "#dddddd", width: "90%", alignSelf: "center", marginTop: 4, marginBottom: 4,
};

const listTextS = {
    paddingTop: 16, paddingRight: 16, color: '#444444', textAlign: 'right'
};

const SubsidyPage = () => {
  return (
      <View >
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 16}}>
              <Text style={{marginRight: 12, fontSize: 16, marginTop: 36, fontWeight: 'bold'}}>Total Bill: </Text>
              <Text style={{marginRight: 16, color: "orange", fontWeight: 'bold', fontSize: 50}}>{total}</Text>
          </View>
          <View style={{flexDirection: 'column', width: "100%", marginTop: 16}}>
              <View style={listitemstyle}><Text style={listTextS}>#128329101921 CA, USA           -$50.10</Text></View>
              <View style={listitemstyle}><Text style={listTextS}>#231909219244 SH, CN            -$80.20</Text></View>
              <View style={listitemstyle}><Text style={listTextS}>#532124895014 PAR, FR           -$61.11</Text></View>
              <View style={listitemstyle}><Text style={listTextS}>#908021211811 SG, SG            -$21.79</Text></View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 16, marginBottom: 16}}>
              <Text style={{marginRight: 12, fontSize: 16, marginTop: 36, fontWeight: 'bold'}}>Balance: </Text>
              <Text style={{marginRight: 16, color: "green", fontWeight: 'bold', fontSize: 50}}>{balance}</Text>
          </View>
          <View style={{width: '80%', height: 48, alignSelf: 'center'}}>
          <Button height="36px" style={{alignSelf: 'center', height: '100%', paddingLeft: 16, paddingRight: 16, width: 300, backgroundColor: '#01a1d3' }} title={'Acknowledge'} onPress={() => Actions.patientRecords()}>Confirm</Button>
      </View></View>
  );
};

const styles = StyleSheet.create({
    circle: {
        width: 36,
        height: 36,
        borderRadius: 100/2,
        backgroundColor: 'red'
    }
});

export default SubsidyPage;