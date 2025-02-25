import React from "react";
import { View,StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';


const Webexap = () => {
    return(
        <View style={style.container}>
            <WebView source={{ uri: 'https://www.google.com' }} 
            />
        </View>
    )
}
export default Webexap;

const style = StyleSheet.create({
    container:{
        height:500,
    }
})