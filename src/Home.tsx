import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<any>;
};

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>

      <View style={styles.buttonContainer}>
        <Button title="API" onPress={() => navigation.navigate("Apituto")} />
          </View>
          <View style={styles.buttonContainer}>
          <Button title="Research" onPress={() => navigation.navigate("Research")} />
      </View>
      <View style={styles.buttonContainer}>
          <Button title="Table" onPress={() => navigation.navigate("Exampletable")} />
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

export default Home;
