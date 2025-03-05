import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert, Platform, StyleSheet } from "react-native";
import { request, PERMISSIONS, RESULTS, check } from "react-native-permissions";
import * as Location from "expo-location";

const Locationexamp = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [loading, setLoading] = useState(false);

  const requestLocationPermission = async () => {
    try {
      let permission;
      if (Platform.OS === "android") {
        permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
      } else if (Platform.OS === "ios") {
        permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
      }

      const status = await request(permission);
      if (status === RESULTS.GRANTED) {
        getLocation();
      } else {
        Alert.alert("Permission Denied", "You need to allow location access.");
      }
    } catch (error) {
      console.error("Permission error", error);
      Alert.alert("Error", "An error occurred while requesting permission.");
    }
  };

  const getLocation = async () => {
    setLoading(true);
    try {
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    } catch (error) {
      Alert.alert("Error", "Failed to get location.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkPermission = async () => {
      const permission = Platform.OS === "android" 
        ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION 
        : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

      const status = await check(permission);
      if (status === RESULTS.GRANTED) {
        getLocation();
      } else {
        requestLocationPermission();
      }
    };

    checkPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Button 
        title={loading ? "Requesting..." : "Request Location Permission"} 
        onPress={requestLocationPermission} 
        disabled={loading}
      />
      {location ? (
        <Text>
          Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
        </Text>
      ) : (
        <Text>No location data available</Text>
      )}
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
});

export default Locationexamp;