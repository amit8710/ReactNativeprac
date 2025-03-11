import React from "react";
import { View,StyleSheet,ImageBackground,Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Apituto from "./src/screens/Apituto";
import Lineapi from "./src/components/Lineapi";
import Listapi from "./src/components/Listapi";
import Apiphoto from "./src/components/Apiphoto";
import Templete from "./src/components/Templete";
import FirstAxios from "./src/components/Firstaxos";
import Research from "./src/screens/Research";
import Counter from "./src/components/Counter";
import Exampleprops from "./src/components/Exampleprops";
import Crud from "./src/components/Crud";
import Exampletable from "./src/screens/Exampletable";
import AsyncStorageExample from "./src/components/AsyncStorageExample";
import { UserLogin } from "./src/components/UserLogin";
import { UserRegister } from "./src/components/UserRegister"; 
import Form from "./src/screens/Form";
import Select from "./src/components/Select";
import Locationexamp from "./src/screens/Locationexamp";
import Iconexm from "./src/components/Iconexm";
import Mapexam from "./src/components/Mapexam";
import Cameraexm from "./src/components/Cameraexm";

export type RootStackParamList = {
  Home: undefined;
  Apituto: undefined;
  Research: undefined;
  Lineapi: undefined;
  Listapi: undefined;
  Apiphoto: undefined;
  Templete: undefined;
  Firstaxos: undefined;
  Counter: undefined;
  Exampleprops: undefined;
  Crud: undefined;
  Exampletable: undefined;
  AsyncStorageExample: undefined;
  Login: undefined; 
  Register: undefined; 
  Locationexamp: undefined;
  Form: undefined;
  Select: undefined;
  Iconexm: undefined;
  Mapexam: undefined;
  Cameraexm: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Apituto" component={Apituto} />
        <Stack.Screen name="Research" component={Research} />
        <Stack.Screen name="Lineapi" component={Lineapi} />
        <Stack.Screen name="Listapi" component={Listapi} />
        <Stack.Screen name="Apiphoto" component={Apiphoto} />
        <Stack.Screen name="Templete" component={Templete} />
        <Stack.Screen name="Firstaxos" component={FirstAxios} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Exampleprops" component={Exampleprops} />
        <Stack.Screen name="Crud" component={Crud} />
        <Stack.Screen name="Exampletable" component={Exampletable} />
        <Stack.Screen name="AsyncStorageExample" component={AsyncStorageExample} />
        <Stack.Screen name="Login" component={UserLogin} />
        <Stack.Screen name="Register" component={UserRegister} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Select" component={Select} />
        <Stack.Screen name="Locationexamp" component={Locationexamp} />
        <Stack.Screen name="Iconexm" component={Iconexm} />
        <Stack.Screen name="Mapexam" component={Mapexam} />
        <Stack.Screen name="Cameraexm" component={Cameraexm} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
