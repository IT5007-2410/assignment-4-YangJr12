/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import IssueList from './IssueList.js';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  title: {
    fontSize: 24, 
    color: 'black',
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginTop: 5, 
  },
});


export default class App extends React.Component
{
  render()
  {
    return(
    <>
        <Text style={styles.title}>Issue Tracker</Text>
        <IssueList/>
    </>);

  }
}
