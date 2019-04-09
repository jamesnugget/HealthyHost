import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, AppRegistry, Image, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

/* Imports app information from language files */
import I18n from './locales/i18n.js';

const { height } = Dimensions.get('window');

export default class OralHealthScreen extends React.PureComponent {

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>

        <View style={styles.container}>

          <Button onPress={() => this.props.navigation.navigate("Diseases")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Oral_Menu_Choices.0')}</Text></Button>
          <Button onPress={() => this.props.navigation.navigate("Facts")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Oral_Menu_Choices.1')}</Text></Button>
          <Button onPress={() => this.props.navigation.navigate("Steps for Good Hygeine")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Oral_Menu_Choices.2')}</Text></Button>
          <Button onPress={() => this.props.navigation.navigate("Dentist Locations")} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>{I18n.t('Text.Oral_Menu_Choices.3')}</Text></Button>

        </View>
      </ScrollView>
    );
  }
}

//default styling for home screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    justifyContent: "center",
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000000',
    margin: 10,
    fontWeight: "bold",
  },
  scrollview: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: 10,
  },
});
