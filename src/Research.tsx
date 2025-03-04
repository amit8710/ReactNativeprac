import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<any>;
};

const Research = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Research</Text>
      <View style={styles.buttonContainer}>
        <Button title="state" onPress={() => navigation.navigate("counter")} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="props" onPress={() => navigation.navigate("Exampleprops")} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Store" onPress={() => navigation.navigate("Hello")} />
        </View>
        <View style={styles.buttonContainer}>
            <Button title="Crud App" onPress={() => navigation.navigate("Crud")} />
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10, 
    width: "80%", 
  },
});

export default Research;
