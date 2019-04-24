import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'native-base';

import I18n from './locales/i18n.js';

const { height } = Dimensions.get('window');

export default class TitleVIScreen extends React.PureComponent {

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

    if (n == 0) {
      Output.push(<Button key={0} onPress={() => { alert("Now playing audio.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Ua si</Text></Button>);
      Output.push(<Button key={1} onPress={() => { alert("Audio is paused.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Ncua</Text></Button>);
      Output.push(<Button key={2} onPress={() => { alert("Audio has stopped.") }} style={{ backgroundColor: '#DCDCDC', alignSelf: "center", width: '25%', justifyContent: "center", margin: 10, borderRadius: 15 }}><Text style={{ color: 'black', fontSize: 20 }}>Nres</Text></Button>);
    }
    return Output;
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollview} scrollEnabled={true} onContentSizeChange={this.onContentSizeChange}>
        <View style={{ flex: 1, alignItems: 'center' }}>

          <View style={{ flexDirection: 'row', justifyContent: "center" }}>
            {this.makeAudioButtons()}
          </View>

          {/* Imports the entire title VI paragraph in current language */}
          <Text style={{ color: '#000000', fontSize: 20, padding: 10 }}>{I18n.t('Title_VI')}</Text>

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