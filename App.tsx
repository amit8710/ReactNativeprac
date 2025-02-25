import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';

//import Animations from './Components/Animations';
//import ButtonBasic from './Components/ButtonBasic';
//import ColourBox from './Components/ColourBox';
//import Form from './Components/Form';
//import Home from './Components/Home';
import Move from './Components/Move';
//import MyTextInput from './Components/MyTextinput';
//import Webexap from './Components/Webexap';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00ffff" />
      <Move />
      <ScrollView>
        <Text style={styles.headerText}>My React Native App</Text>
      
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  }
});
