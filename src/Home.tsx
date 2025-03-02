import React, { FC, ReactElement, useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type Props = { navigation: HomeScreenNavigationProp };

export const HomeScreen: FC<Props> = ({ navigation }): ReactElement => {
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
      <Text>Welcome to the Home page!</Text>
      <Button title="Upload Page" onPress={() => navigation.navigate("Upload")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, 
  alignItems: "center",
  justifyContent: "center", 
  flex: 1 },
});
