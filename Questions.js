import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text, AppRegistry, Image, ScrollView, Dimensions } from 'react-native';
import {Container, Header, Content, Button} from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import I18n from './locales/i18n.js';

var object = require('./locales/en.json');

const { height } = Dimensions.get('window');

export default class QuestionsScreen extends React.PureComponent {

  //gets the list of questions and puts them into the overall output array
  makeList = () => {

    Questions = []

    var objectSize = Object.keys(object.FAQ).length;

    //grabs single questions and adds them to the array
    for(i = 0; i < objectSize - 1; i++){
      var listIndex = (i+1).toString();
      var string1 = listIndex + '. ' + I18n.t('FAQ.' + i);

      Questions.push(<Text key={i} style={{ padding: 5, textAlign: "left", fontSize: 22, color: "black" }}>{string1}</Text>);
    }

    //grabs first multi-part question
    Questions.push(<Text key={10} style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 5, paddingRight: 5, textAlign: "left", fontSize: 22, color: "black" }}>11. {I18n.t('FAQ.' + 10 + '.Multi_Part_Question.' + 0)}</Text>);

      //gets parts of multi-part question and adds them to the array
      for (i = 0; i < 3; i++) {
        var part = String.fromCharCode(i + 65);
        var string1 = part + ": " + I18n.t('FAQ.' + 10 + '.Parts.' + 0 + '.' + part);
        Questions.push(<Text key={i + 11} style={{ padding: 5, textAlign: "left", fontSize: 22, color: "black" }}>{string1}</Text>);
      }

      //grabs second multi-part question
      Questions.push(<Text key={14} style={{paddingTop: 20, paddingBottom: 20, paddingLeft: 5, paddingRight: 5, textAlign: "left", fontSize: 22, color: "black" }}>12. {I18n.t('FAQ.' + 10 + '.Multi_Part_Question.' + 1)}</Text>);

        //gets parts of multi-part question and adds them to the array
        for (i = 0; i < 6; i++) {
          var part = String.fromCharCode(i + 65);
          var string2 = part + ": " + I18n.t('FAQ.' + 10 + '.Parts.' + 1 + '.' + part);
          Questions.push(<Text key={i + 15} style={{ padding: 5, textAlign: "left", fontSize: 22, color: "black" }}>{string2}</Text>);
        }

        return Questions;
      }

      state = {
        screenHeight: height,
      };

      onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
      };

      //This funciton only applies to the "Hmong" language for now
      makeAudioButtons = () => {
      var string = I18n.locale;

      var n = string.localeCompare("hmn");

      Output = []

      if(n == 0){
        Output.push(<Button key={0} onPress={() => {alert("Now playing audio.")}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>Ua si</Text></Button>);
        Output.push(<Button key={1} onPress={() => {alert("Audio is paused.")}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>Ncua</Text></Button>);
        Output.push(<Button key={2} onPress={() => {alert("Audio has stopped.")}} style={{backgroundColor: '#DCDCDC', alignSelf:"center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15}}><Text style={{color: 'black', fontSize: 20}}>Nres</Text></Button>);
      }
      return Output;
      };

      render() {
        return (
          <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
          <View style={{ flex: 1}}>

          <View style={{ flexDirection: 'row', justifyContent: "center"}}>
            {this.makeAudioButtons()}
          </View>

        {/* Displays FAQ */}
        <Text style={{ textAlign: "center", padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{I18n.t('Text.FAQ')}</Text>
      {/* Displays questions onto view */}
      {this.makeList()}
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