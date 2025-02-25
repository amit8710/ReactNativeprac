
import React from "react";
import { View, StyleSheet } from "react-native";

const ColourBox = () => {
  return (
    <View style={style.container}>
      <View style={style.greenbox} />
      <View style={style.bluebox} />
      <View style={style.blackbox} />
    </View>
  );
};

export default ColourBox;
const style = StyleSheet.create({
    container : {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'right',
        backgroundColor: '#fff',
        height: '900',
    },
    greenbox : {
        height: '100',
        width: '100',
        backgroundColor: 'green',
        marginBottom: 40,
    },
    bluebox :{
        width: '100',
        height: '100',
        backgroundColor: 'blue',
        marginBottom: 40,
    },
    blackbox :{
        width: '100',
        height: '100',
        backgroundColor: 'black',
        marginBottom: 40,
    },
})



