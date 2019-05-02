import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'native-base';

import I18n from './locales/i18n.js';

var object = require('./locales/en.json');

const { height } = Dimensions.get('window');

export default class DiseasesInfoScreen extends React.PureComponent {

  makePage = (disease) => {
    Output = []

    var curr = 0;

    var objectSize = Object.keys(object.Oral_Health.Diseases).length;

    for (i = 0; i < objectSize; i++) {

      var string = I18n.t('Oral_Health.Diseases.' + i + '.Name');

      var n = string.localeCompare(disease);

      if (n == 0) {
        curr = i;
        break;
      }
    }

    Output.push(<Text key={0} style={{ textAlign: "center", padding: 10, fontSize: 40, color: "black", fontWeight: "bold" }}>{disease}</Text>);
    Output.push(<Text key={1} style={{ textAlign: "center", padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Symptoms')}</Text>);
    Output.push(<Text key={2} style={{ padding: 10, fontSize: 22, color: "black" }}>{I18n.t('Oral_Health.Diseases.' + curr + '.Symptoms')}</Text>);
    Output.push(<Text key={3} style={{ textAlign: "center", padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Causes')}</Text>);
    Output.push(<Text key={4} style={{ padding: 10, fontSize: 22, color: "black" }}>{I18n.t('Oral_Health.Diseases.' + curr + '.Causes')}</Text>);
    Output.push(<Text key={5} style={{ textAlign: "center", padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Treatment')}</Text>);
    Output.push(<Text key={6} style={{ padding: 10, fontSize: 22, color: "black" }}>{I18n.t('Oral_Health.Diseases.' + curr + '.Treatment')}</Text>);
    Output.push(<Text key={7} style={{ textAlign: "center", padding: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>{I18n.t('Text.Cost_Treatment')}</Text>);
    Output.push(<Text key={8} style={{ padding: 10, fontSize: 22, color: "black" }}>{I18n.t('Oral_Health.Diseases.' + curr + '.Cost_Treatment')}</Text>);

    return Output;
  }

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

  render() {

    const { navigation } = this.props;

    const disease = navigation.getParam('disease');

    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <View style={{ flex: 1 }}>

          <View style={{ flexDirection: 'row', justifyContent: "center" }}>
            {/*this.makeAudioButtons()*/}
          </View>

          {this.makePage(disease)}
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