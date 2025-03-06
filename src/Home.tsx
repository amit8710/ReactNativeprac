import React, { FC, ReactElement, useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type Props = { navigation: HomeScreenNavigationProp };

export const Home: FC<Props> = ({ navigation }): ReactElement => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      Alert.alert("Logged Out", "You have been logged out.");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", "Failed to log out.");
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Logout" onPress={handleLogout} color="red" />
      ),
    });
  }, [navigation]);

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
      <View style={styles.buttonContainer}>
        <Button title="LocationAccess" onPress={() => navigation.navigate("Locationexamp")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Form" onPress={() => navigation.navigate("Form")} />
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
