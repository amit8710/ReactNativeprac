import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Platform, PermissionsAndroid } from "react-native";
import Geolocation from 'react-native-geolocation-service';

const Locationexamp = () => {
  const [location, setLocation] = useState<Geolocation.GeoCoordinates | null>(null);

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
          title: "Location Permission",
          message: "App needs access to your location.",
          buttonNeutral: "Ask Me Later",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Location permission granted");
      } else {
        console.log("Location permission denied");
      }
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setLocation(position.coords);
      },
      (error) => {
        console.log(error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View>
      <Button title="Get the current location" onPress={getCurrentLocation} />
      {location ? (
        <>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
        </>
      ) : (
        <Text>No Location data</Text>
      )}
    </View>
  );
};

export default Locationexamp;
