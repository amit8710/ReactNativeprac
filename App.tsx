import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { UserLogin } from "./src/UserLogin";
import { UserRegister } from "./src/UserRegister";
import { HomeScreen } from "./src/Home";
import Upload from "./src/upload";
export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  Home: undefined;
  Upload: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={UserRegister} />
        <Stack.Screen name="Login" component={UserLogin} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Upload" component={Upload} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}