import React from 'react';
import { Text, View, StyleSheet, Pressable, Touchable, TouchableOpacity } from 'react-native';



const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
  // Creates a button, with given text, and type(All Capitals) hi
  return (
      <TouchableOpacity
      onPress={onPress}
      style ={[styles.container, styles[`container_${type}`]]}>

      <Text
        style={[styles.text, styles[`text_${type}`]]}>{text}
      </Text> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    padding: 20,
    alignItems: 'center',
    borderRadius: 96,
    display: 'flex',
    bottom: 0,
    fontStyle: 'bold'
  },
    
  container_PRIMARY:{
    backgroundColor: '#5551FF',
    justifyContent: 'flex-end'
  },

  text_PRIMARY:{
    fontFamily: 'Poppins-Black',
    color: 'white',
    fontSize: 16,
  },

  text_TERTIARY:{
    color: "white",
  },

  container_TERTIARY:{
    width: '100%',
    height: 40,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 0
  },

  container_PURPLE:{
    width: '100%',
    height: 40,
    padding: 2,
    marginVertical: 20,
    borderRadius: 0,
    alignItems: "baseline"
  },
  
  text_PURPLE: {
    color: "#5551FF",
    fontFamily: "Poppins-Black",
    alignItems: "baseline"
  }
});

export default CustomButton;