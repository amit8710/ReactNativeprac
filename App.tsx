import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home";
import Lineapi from "./src/Lineapi";
import Listapi from "./src/Listapi";
import Apiphoto from "./src/Apiphoto";
import Templete from "./src/Templete";
import FirstAxios from "./src/Firstaxos";
import Todoapp from "./src/Todoapp";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lineapi" component={Lineapi} />
        <Stack.Screen name="Listapi" component={Listapi} />
        <Stack.Screen name="Apiphoto" component={Apiphoto} />
        <Stack.Screen name="Templete" component={Templete} />
        <Stack.Screen name="Firstaxos" component={FirstAxios} />
        <Stack.Screen name="Todoapp" component={Todoapp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
