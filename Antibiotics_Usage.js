import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AppRegistry, Image, ScrollView, Dimensions } from 'react-native';
import {Container, Header, Content, Button} from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import I18n from './locales/i18n.js';

const { height } = Dimensions.get('window');

export default class AntibioticsUsageScreen extends React.PureComponent {

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center"}}>
      <Text style={{ padding: 10, fontSize: 18 }}>{I18n.t('Antibiotics.0.Description')}</Text>
    {/* Takes user to improper usage screen */}
    <Button onPress={() => {this.props.navigation.navigate('Improper_Usage')}} style={{ textAlign: "center", height: "35%", position: 'absolute', bottom: "35%", backgroundColor: 'red', alignSelf: "center", width: '100%', justifyContent: "center", borderRadius: 0 }}><Text style={{ fontSize: 45, color: "white", fontWeight: "bold" }}>{I18n.t('Antibiotics.0.Usage.0')}</Text></Button>
  {/* Takes user to proper usage screen */}
  <Button onPress={() => {this.props.navigation.navigate('Proper_Usage')}} style={{ textAlign: "center", height: "35%", position: 'absolute', bottom: 0, backgroundColor: 'green', alignSelf: "center", width: '100%', justifyContent: "center", borderRadius: 0 }}><Text style={{ fontSize: 45, color: "white", fontWeight: "bold" }}>{I18n.t('Antibiotics.0.Usage.1')}</Text></Button>
  </View>
  );
  }
}