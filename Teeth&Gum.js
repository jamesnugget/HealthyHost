import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'native-base';

import I18n from './locales/i18n.js';

var object = require('./locales/en.json');

const { height } = Dimensions.get('window');

export default class TeethGumScreen extends React.PureComponent {

  //This funciton only applies to the "Hmong" language for now
  makeAudioButtons = () => {
    var string = I18n.locale;

    var n = string.localeCompare("hmn");

    Output = []

    if (n == 0) {
      Output.push(<Button key={0} onPress={() => { alert("Now playing audio.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Ua si</Text></Button>);
      Output.push(<Button key={1} onPress={() => { alert("Audio is paused.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Ncua</Text></Button>);
      Output.push(<Button key={2} onPress={() => { alert("Audio has stopped.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Nres</Text></Button>);
    }
    return Output;
  };

  state = {
    screenHeight: height,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  //gets the list of questions and puts them into the overall output array
  makeList = () => {

    Steps = []

    var objectSize = Object.keys(object.Oral_Health.Facts).length;

    //grabs single questions and adds them to the array
    for (i = 0; i < objectSize - 5; i++) {
      var string1 = I18n.t('Oral_Health.Facts.' + i + '.Title');
      var string2 = I18n.t('Oral_Health.Facts.' + i + '.Info');

      Steps.push(<View key={i}><Text style={{ padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{string1}</Text><Text style={{ padding: 10, fontSize: 22, color: "black" }}>{string2}</Text></View>);
    }

    return Steps;
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <View style={{ flex: 1 }}>

          <View style={{ flexDirection: 'row', justifyContent: "center" }}>
            {/*this.makeAudioButtons()*/}
          </View>

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