import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';



const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
  return (
    <Pressable
      onPress={onPress}
      style ={[styles.container, styles[`container_${type}`]]}>
      <Text
        style={[styles.text, styles[`text_${type}`]]}>{text}
      </Text>  
    </Pressable>
    
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    padding: 20,
    marginVertical: 20,
    alignItems: 'center',
    borderRadius: 96,
  },
    
  container_PRIMARY:{
    backgroundColor: '#5551FF',
  },


  text_PRIMARY:{
    fontFamily: 'Poppins-Regular',
    fontWeight:'bold',
    color:'white',
    fontSize: 16
  },


  text_TERTIARY:{
    fontWeight:'bold',
    color: "white",
    

  },

  container_TERTIARY:{
    width: '100%',
    height: 64,
    padding: 1,
    marginVertical: 0,
    alignItems: 'center',
    borderRadius: 0
  },

  container_THREE: {
    backgroundColor: '#fffdd0'
  },

  text_THREE: {
    fontWeight:'bold',
    color:'black'
  },



});

export default CustomButton;