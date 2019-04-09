import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AppRegistry, Image, Linking, ScrollView, Dimensions } from 'react-native';
import {Container, Header, Content, Button} from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import I18n from './locales/i18n.js';

const { height } = Dimensions.get('window');

export default class ResourcesScreen extends React.PureComponent {

  state = {
    screenHeight: height,
  };

  handleURL = (URL) => {
    //opens link in phone web browser
    Linking.openURL(URL);
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
      <View style={{ flex: 1 }}>

      <Text onPress={() => {this.handleURL(I18n.t('Settings.0.0'))}} style={{ padding: 10, textAlign: "left", fontSize: 22, color: "red" }}>{I18n.t('Settings.0.0')}</Text>
      <Text onPress={() => {this.handleURL(I18n.t('Settings.0.1'))}} style={{ padding: 10, textAlign: "left", fontSize: 22, color: "red" }}>{I18n.t('Settings.0.1')}</Text>
      <Text onPress={() => {this.handleURL(I18n.t('Settings.0.2'))}} style={{ padding: 10, textAlign: "left", fontSize: 22, color: "red" }}>{I18n.t('Settings.0.2')}</Text>
      <Text onPress={() => {this.handleURL(I18n.t('Settings.0.3'))}} style={{ padding: 10, textAlign: "left", fontSize: 22, color: "red" }}>{I18n.t('Settings.0.3')}</Text>
      <Text onPress={() => {this.handleURL(I18n.t('Settings.0.4'))}} style={{ padding: 10, textAlign: "left", fontSize: 22, color: "red" }}>{I18n.t('Settings.0.4')}</Text>
      <Text onPress={() => {this.handleURL(I18n.t('Settings.0.5'))}} style={{ padding: 10, textAlign: "left", fontSize: 22, color: "red" }}>{I18n.t('Settings.0.5')}</Text>
      <Text onPress={() => {this.handleURL(I18n.t('Settings.0.6'))}} style={{ padding: 10, textAlign: "left", fontSize: 22, color: "red" }}>{I18n.t('Settings.0.6')}</Text>
      <Text onPress={() => {this.handleURL(I18n.t('Settings.0.7'))}} style={{ padding: 10, textAlign: "left", fontSize: 22, color: "red" }}>{I18n.t('Settings.0.7')}</Text>
      <Text onPress={() => {this.handleURL(I18n.t('Settings.0.8'))}} style={{ padding: 10, textAlign: "left", fontSize: 22, color: "red" }}>{I18n.t('Settings.0.8')}</Text>
      <Text onPress={() => {this.handleURL(I18n.t('Settings.0.9'))}} style={{ padding: 10, textAlign: "left", fontSize: 22, color: "red" }}>{I18n.t('Settings.0.9')}</Text>

      </View>
      </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 10,
  },
});