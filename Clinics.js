import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AppRegistry, Image, Linking, ScrollView, Dimensions } from 'react-native';
import {Container, Header, Content, Button} from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import I18n from './locales/i18n.js';

var object = require('./locales/en.json');

//gets height of phone screen
const { height } = Dimensions.get('window');

export default class ClinicsScreen extends React.PureComponent {

  //grabs addresses clicked on and takes user to the map app of the platform
  handleAddresses = (address) => {
    //gets input and trims whitespace and replaces it with +'s
    var newAddress = address.split(' ').join('+');

    //check to see which platform is being used for the app and uses appropriate url for searching with appropriate map app
    if (Platform.OS === 'ios') {
      Linking.openURL('http://maps.apple.com/maps?q=' + newAddress);
    } else {
      Linking.openURL('http://maps.google.com/maps?q=' + newAddress);
    }
  };

  //grabs phone number clicked on and takes user to phone app of the platform
  handlePhones = (phone) => {
    //gets input and removes special characters
    var newPhone = phone.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');

    //opens phone number like HTML5 phone link
    Linking.openURL('tel:' + newPhone);
  };

  makeListOfHours = () => {
  Hours = []

  var objectSize = Object.keys(object.Clinics).length;

    //For loop to insert arrays of hours into the Hours[]
    for(i = 0; i < objectSize; i++){
      var temp = []
      for(j = 0; j < 7; j++){
        temp.push(<Text key={j} style={{ textAlign: "left", fontSize: 15, color: "black" }}>{I18n.t('Text.Days.' + j)}: {I18n.t('Clinics.' + i + '.Hours.' + j)}</Text>);
      }
      Hours.push(temp);
    }

    return Hours;
  };

  //grabs info of screen height and places it as a state
  state = {
    screenHeight: height,
  };

  //changes window of screen to size of content if and only if the content size is bigger than
  onContentSizeChange = (contentWidth, contentHeight) => {
  this.setState({ screenHeight: contentHeight });
};

render() {

  return (
      //calls the scrollview to keep content from going off screen and not being able to scroll down
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
      <View style={styles.content}>

      <Text style={{ textAlign: "left", fontSize: 30, color: "black", fontWeight: "bold" }}>1. {I18n.t('Clinics.0.Name')}</Text>
      <Text onPress={ () => {this.handleAddresses(I18n.t('Clinics.0.Address'))}} style={{ textAlign: "left", fontSize: 15, color: "red" }}>{I18n.t('Clinics.0.Address')}</Text>
      <Text onPress={ () => {this.handlePhones(I18n.t('Clinics.0.Phone'))}} style={{ textAlign: "left", fontSize: 15, color: "blue" }}>{I18n.t('Clinics.0.Phone')}</Text>
      <Text style={{ textAlign: "left", fontSize: 22, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Hours')}:</Text>
      {this.makeListOfHours()[0]}

      <Text style={{ textAlign: "left", fontSize: 30, color: "black", fontWeight: "bold" }}>2. {I18n.t('Clinics.1.Name')}</Text>
      <Text onPress={ () => {this.handleAddresses(I18n.t('Clinics.1.Address'))}} style={{ textAlign: "left", fontSize: 15, color: "red" }}>{I18n.t('Clinics.1.Address')}</Text>
      <Text onPress={ () => {this.handlePhones(I18n.t('Clinics.1.Phone'))}} style={{ textAlign: "left", fontSize: 15, color: "blue" }}>{I18n.t('Clinics.1.Phone')}</Text>
      <Text style={{ textAlign: "left", fontSize: 22, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Hours')}:</Text>
      {this.makeListOfHours()[1]}

      <Text style={{ textAlign: "left", fontSize: 30, color: "black", fontWeight: "bold" }}>3. {I18n.t('Clinics.2.Name')}</Text>
      <Text onPress={ () => {this.handleAddresses(I18n.t('Clinics.2.Address'))}} style={{ textAlign: "left", fontSize: 15, color: "red" }}>{I18n.t('Clinics.2.Address')}</Text>
      <Text onPress={ () => {this.handlePhones(I18n.t('Clinics.2.Phone'))}} style={{ textAlign: "left", fontSize: 15, color: "blue" }}>{I18n.t('Clinics.2.Phone')}</Text>
      <Text style={{ textAlign: "left", fontSize: 22, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Hours')}:</Text>
      {this.makeListOfHours()[2]}

      <Text style={{ textAlign: "left", fontSize: 30, color: "black", fontWeight: "bold" }}>4. {I18n.t('Clinics.3.Name')}</Text>
      <Text onPress={ () => {this.handleAddresses(I18n.t('Clinics.3.Address'))}} style={{ textAlign: "left", fontSize: 15, color: "red" }}>{I18n.t('Clinics.3.Address')}</Text>
      <Text onPress={ () => {this.handlePhones(I18n.t('Clinics.3.Phone'))}} style={{ textAlign: "left", fontSize: 15, color: "blue" }}>{I18n.t('Clinics.3.Phone')}</Text>
      <Text style={{ textAlign: "left", fontSize: 22, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Hours')}:</Text>
      {this.makeListOfHours()[3]}

      <Text style={{ textAlign: "left", fontSize: 30, color: "black", fontWeight: "bold" }}>5. {I18n.t('Clinics.4.Name')}</Text>
      <Text onPress={ () => {this.handleAddresses(I18n.t('Clinics.4.Address'))}} style={{ textAlign: "left", fontSize: 15, color: "red" }}>{I18n.t('Clinics.4.Address')}</Text>
      <Text onPress={ () => {this.handlePhones(I18n.t('Clinics.4.Phone'))}} style={{ textAlign: "left", fontSize: 15, color: "blue" }}>{I18n.t('Clinics.4.Phone')}</Text>
      <Text style={{ textAlign: "left", fontSize: 22, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Hours')}:</Text>
      {this.makeListOfHours()[4]}

      <Text style={{ textAlign: "left", fontSize: 30, color: "black", fontWeight: "bold" }}>6. {I18n.t('Clinics.5.Name')}</Text>
      <Text onPress={ () => {this.handleAddresses(I18n.t('Clinics.5.Address'))}} style={{ textAlign: "left", fontSize: 15, color: "red" }}>{I18n.t('Clinics.5.Address')}</Text>
      <Text onPress={ () => {this.handlePhones(I18n.t('Clinics.5.Phone'))}} style={{ textAlign: "left", fontSize: 15, color: "blue" }}>{I18n.t('Clinics.5.Phone')}</Text>
      <Text style={{ textAlign: "left", fontSize: 22, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Hours')}:</Text>
      {this.makeListOfHours()[5]}

      <Text style={{ textAlign: "left", fontSize: 30, color: "black", fontWeight: "bold" }}>7. {I18n.t('Clinics.6.Name')}</Text>
      <Text onPress={ () => {this.handleAddresses(I18n.t('Clinics.6.Address'))}} style={{ textAlign: "left", fontSize: 15, color: "red" }}>{I18n.t('Clinics.6.Address')}</Text>
      <Text onPress={ () => {this.handlePhones(I18n.t('Clinics.6.Phone'))}} style={{ textAlign: "left", fontSize: 15, color: "blue" }}>{I18n.t('Clinics.6.Phone')}</Text>
      <Text style={{ textAlign: "left", fontSize: 22, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Hours')}:</Text>
      {this.makeListOfHours()[6]}

      <Text style={{ textAlign: "left", fontSize: 30, color: "black", fontWeight: "bold" }}>8. {I18n.t('Clinics.7.Name')}</Text>
      <Text onPress={ () => {this.handleAddresses(I18n.t('Clinics.7.Address'))}} style={{ textAlign: "left", fontSize: 15, color: "red" }}>{I18n.t('Clinics.7.Address')}</Text>
      <Text onPress={ () => {this.handlePhones(I18n.t('Clinics.7.Phone'))}} style={{ textAlign: "left", fontSize: 15, color: "blue" }}>{I18n.t('Clinics.7.Phone')}</Text>
      <Text style={{ textAlign: "left", fontSize: 22, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Hours')}:</Text>
      {this.makeListOfHours()[7]}

      <Text style={{ textAlign: "left", fontSize: 30, color: "black", fontWeight: "bold" }}>9. {I18n.t('Clinics.8.Name')}</Text>
      <Text onPress={ () => {this.handleAddresses(I18n.t('Clinics.8.Address'))}} style={{ textAlign: "left", fontSize: 15, color: "red" }}>{I18n.t('Clinics.8.Address')}</Text>
      <Text onPress={ () => {this.handlePhones(I18n.t('Clinics.8.Phone'))}} style={{ textAlign: "left", fontSize: 15, color: "blue" }}>{I18n.t('Clinics.8.Phone')}</Text>
      <Text style={{ textAlign: "left", fontSize: 22, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Hours')}:</Text>
      {this.makeListOfHours()[8]}

      </View>
      </ScrollView>
      
      );
}
}

//styles the outer scroll view to see the rest of the content that goes off screen
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