import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AppRegistry, Image, ScrollView, Dimensions } from 'react-native';
import {Container, Header, Content, Button} from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import I18n from './locales/i18n.js';

const { height } = Dimensions.get('window');

export default class IllnessesScreen extends React.PureComponent {

  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
      <View style={{ flex: 1, alignItems: "center"}}>
      
      <Button onPress={() => {this.props.navigation.navigate('Illnesses_Info', {illness: I18n.t('Text.Illnesses_Menu_Choices.0'),})}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>{I18n.t('Text.Illnesses_Menu_Choices.0')}</Text></Button>
      <Button onPress={() => {this.props.navigation.navigate('Illnesses_Info', {illness: I18n.t('Text.Illnesses_Menu_Choices.1'),})}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>{I18n.t('Text.Illnesses_Menu_Choices.1')}</Text></Button>
      <Button onPress={() => {this.props.navigation.navigate('Illnesses_Info', {illness: I18n.t('Text.Illnesses_Menu_Choices.2'),})}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>{I18n.t('Text.Illnesses_Menu_Choices.2')}</Text></Button>
      <Button onPress={() => {this.props.navigation.navigate('Illnesses_Info', {illness: I18n.t('Text.Illnesses_Menu_Choices.3'),})}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>{I18n.t('Text.Illnesses_Menu_Choices.3')}</Text></Button>
      <Button onPress={() => {this.props.navigation.navigate('Illnesses_Info', {illness: I18n.t('Text.Illnesses_Menu_Choices.4'),})}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>{I18n.t('Text.Illnesses_Menu_Choices.4')}</Text></Button>
      <Button onPress={() => {this.props.navigation.navigate('Illnesses_Info', {illness: I18n.t('Text.Illnesses_Menu_Choices.5'),})}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>{I18n.t('Text.Illnesses_Menu_Choices.5')}</Text></Button>
      <Button onPress={() => {this.props.navigation.navigate('Illnesses_Info', {illness: I18n.t('Text.Illnesses_Menu_Choices.6'),})}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>{I18n.t('Text.Illnesses_Menu_Choices.6')}</Text></Button>
      <Button onPress={() => {this.props.navigation.navigate('Illnesses_Info', {illness: I18n.t('Text.Illnesses_Menu_Choices.7'),})}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>{I18n.t('Text.Illnesses_Menu_Choices.7')}</Text></Button>
      <Button onPress={() => {this.props.navigation.navigate('Illnesses_Info', {illness: I18n.t('Text.Illnesses_Menu_Choices.8'),})}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>{I18n.t('Text.Illnesses_Menu_Choices.8')}</Text></Button>
      <Button onPress={() => {this.props.navigation.navigate('Illnesses_Info', {illness: I18n.t('Text.Illnesses_Menu_Choices.9'),})}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>{I18n.t('Text.Illnesses_Menu_Choices.9')}</Text></Button>
      <Button onPress={() => {this.props.navigation.navigate('Illnesses_Info', {illness: I18n.t('Text.Illnesses_Menu_Choices.10'),})}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>{I18n.t('Text.Illnesses_Menu_Choices.10')}</Text></Button>
      <Button onPress={() => {this.props.navigation.navigate('Illnesses_Info', {illness: I18n.t('Text.Illnesses_Menu_Choices.11'),})}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>{I18n.t('Text.Illnesses_Menu_Choices.11')}</Text></Button>
      <Button onPress={() => {this.props.navigation.navigate('Illnesses_Info', {illness: I18n.t('Text.Illnesses_Menu_Choices.12'),})}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '80%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>{I18n.t('Text.Illnesses_Menu_Choices.12')}</Text></Button>

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