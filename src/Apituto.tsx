import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<any>;
};

const Apituto = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>API</Text>

      <View style={styles.buttonContainer}>
        <Button title="Line" onPress={() => navigation.navigate("Lineapi")} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Photo" onPress={() => navigation.navigate("Apiphoto")} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="List" onPress={() => navigation.navigate("Listapi")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Temp" onPress={() => navigation.navigate("Templete")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Axois" onPress={() => navigation.navigate("Firstaxos")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="AsyncStorage" onPress={() => navigation.navigate("AsyncStorageExample")} />
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

export default Apituto;
