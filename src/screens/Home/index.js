/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,Button
} from 'react-native';
import {Actions} from 'react-native-router-flux';
 class Home extends Component {
   constructor(props){
     super(props);

     this.onPressMovie = this.onPressMovie.bind(this);

   }
   onPressMovie(){
     Actions.movieList();
   }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Home component</Text>
        <Button onPress={this.onPressMovie} title="go movie" style={{width:40, height : 40}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
