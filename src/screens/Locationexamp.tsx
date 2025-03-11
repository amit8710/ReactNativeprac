import React, { useState } from "react";
import { View, Button, PermissionsAndroid, Platform, Alert, StyleSheet } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import MapView, { Marker } from "react-native-maps";

const LocationExample = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  const requestLocationPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "This app needs access to your location.",
            buttonPositive: "OK",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true; 
  };

  const getLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      Alert.alert("Permission Denied", "Enable location services to continue.");
      return;
    }
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error.code, error.message);
        Alert.alert("Error", "Failed to get location");
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 } 
    );    
  };

  return (
    <View style={styles.container}>
      <Button title="Get Location" onPress={getLocation} />
      {location && (
        <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
      >
        <Marker coordinate={location} title="You are here" />
      </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    marginTop: 10,
  },
});

export default LocationExample;
