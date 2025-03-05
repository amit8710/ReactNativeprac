import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home";
import Apituto from "./src/Apituto";
import Lineapi from "./src/Lineapi";
import Listapi from "./src/Listapi";
import Apiphoto from "./src/Apiphoto";
import Templete from "./src/Templete";
import FirstAxios from "./src/Firstaxos";
import Research from "./src/Research";
import Counter from "./src/Counter";
import Exampleprops from "./src/Exampleprops";
import Crud from "./src/Crud";
import Exampletable from "./src/Exampletable";
import AsyncStorageExample from "./src/AsyncStorageExample";
import { UserLogin } from "./src/UserLogin";
import { UserRegister } from "./src/UserRegister"; 

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
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
