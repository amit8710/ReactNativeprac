import React from "react";
import { Text, View, TextInput, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Backgroundimg = () => {
    return(
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('./img/download.jpg')}  
                style={styles.background}
            >
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: screenWidth,
        height: screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Backgroundimg;
