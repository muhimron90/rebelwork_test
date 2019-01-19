/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Routers from './Router';
export default class Apps extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>I'm the Apps component</Text>
      // </View>
      <Routers />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
