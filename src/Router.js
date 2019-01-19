/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Router, Stack,Scene, Lightbox,ActionConst,Actions} from 'react-native-router-flux';
import Home from '../src/screens/Home';
import movieList from '../src/screens/Movie';
class Routers extends Component {
  render() {
    return (
      <Router>
      <Stack key="root">

      <Stack key="home" initial hideNavBar type={ActionConst.REPLACE}>
      <Scene key="home" component={Home}  />
      </Stack>

      <Stack key="movieList" type={ActionConst.REPLACE}>
      <Scene key="movieList" component={movieList} hideNavBar />
      </Stack>

      </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Routers;
