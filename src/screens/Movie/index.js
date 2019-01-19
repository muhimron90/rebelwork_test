/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
class movieList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the movieList component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default movieList;
