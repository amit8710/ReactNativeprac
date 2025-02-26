import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your components
import Animations from './Components/Animations';
import ButtonBasic from './Components/ButtonBasic';
import ColourBox from './Components/ColourBox';
import Form from './Components/Form';
import Home from './Components/Home';
import Move from './Components/Move';
import MyTextInput from './Components/MyTextinput';
import Webexap from './Components/Webexap';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00ffff" />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Animations" component={Animations} />
          <Stack.Screen name="ButtonBasic" component={ButtonBasic} />
          <Stack.Screen name="ColourBox" component={ColourBox} />
          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="Move" component={Move} />
          <Stack.Screen name="MyTextInput" component={MyTextInput} />
          <Stack.Screen name="Webexap" component={Webexap} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
