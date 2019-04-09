import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//imports screens from each file to stacknavigator for navigation
import HomeScreen from './Home.js';
import AntibioticsScreen from './Antibiotics.js';
import IllnessesScreen from './Illnesses.js';
import QuestionsScreen from './Questions.js';
import ClinicsScreen from './Clinics.js';
import TitleVIScreen from './TitleVI.js';
import BackgroundScreen from './Background.js';
import ResourcesScreen from './Resources.js';
import AntibioticsUsageScreen from './Antibiotics_Usage.js';
import ImproperUsageScreen from './Improper_Usage.js';
import ProperUsageScreen from './Proper_Usage.js';
import AntibioticsInfoScreen from './Antibiotics_Info.js';
import IllnessesInfoScreen from './Illnesses_Info.js';

//makes the stacknavigator which allows for buttons to navigate different screens based on function
const AppNavigator = createStackNavigator(
  //binds screens to navigation name to allow buttons to go to that screen
  {
    "Home": HomeScreen,
    "Antibiotics": AntibioticsScreen,
    "Illnesses": IllnessesScreen,
    "Questions for your Doctor": QuestionsScreen,
    "Medical Clinics": ClinicsScreen,
    "Title VI": TitleVIScreen,
    "Background": BackgroundScreen,
    "Resources": ResourcesScreen,
    "Antibiotics_Usage": AntibioticsUsageScreen,
    "Improper_Usage": ImproperUsageScreen,
    "Proper_Usage": ProperUsageScreen,
    "Antibiotics_Info": AntibioticsInfoScreen,
    "Illnesses_Info": IllnessesInfoScreen
  },
  {
    //first screen to enter when opening the app
    initialRouteName: "Home"
  }
  );

export default createAppContainer(AppNavigator);