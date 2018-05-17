/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import Accordion from './src/components/Accordion';
import flightsData from './config/data.json';

const {width, height} = Dimensions.get('window');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const summaryData = flightsData.flights[0].summary.categorySummaries;
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex:1, backgroundColor: 'transparent' }}>
        <View>
          <Image source={require('./src/assets/background.png')} style={{ height: height, width: width, position: 'absolute', top:0, left:0 }} />
        </View>
        <ScrollView>      
          <Accordion
            data={ summaryData }
          />
      </ScrollView>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
