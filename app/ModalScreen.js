import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CardViewNoButton from "./components/CardViewNoButton"

const Modal = () => {
  return (
      <ScrollView contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'center'}} style={styles.container}>
        <CardViewNoButton/>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
  }
});

export default Modal;
