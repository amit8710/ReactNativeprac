import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Mapexam = () => {
    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map} 
                initialRegion={{
                    latitude: 27.7172, 
                    longitude: 85.3240,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            />
        </View>
    );
}

export default Mapexam;

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { flex: 1 },
});