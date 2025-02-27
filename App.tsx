import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Components/Home";
import Details from "./Components/Details";
import AddPost from "./Components/AddPost";
import Todo from "./Components/Todo";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="AddPost" component={AddPost}/>
      <Stack.Screen name="ToDo" component={Todo} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
