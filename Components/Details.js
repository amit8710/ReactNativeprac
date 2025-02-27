import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Details = ({ navigation }) => {
  // Sample user details (You can replace this with real data from API)
  const userDetails = {
    name: "Amit Basnet",
    email: "amit246@gmail.com",
    phone: "+977-9869422469",
    address: "Kathmandu,Nepal",
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerButtonContainer}>
          <Button title="Back" onPress={() => navigation.navigate("Home")} />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{userDetails.name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userDetails.email}</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>{userDetails.phone}</Text>

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{userDetails.address}</Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  detailsContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    maxWidth: 350,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  headerButtonContainer: {
    marginRight: 10,
  },
});
