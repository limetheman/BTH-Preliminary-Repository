import React from 'react';
import { Text, View, StyleSheet, Pressable, Touchable, TouchableOpacity } from 'react-native';

const ContactsCard = ({onPress, text, type = "PRIMARY"}) => {
    // The UI card component on found the contacts page
    return (
        <View style= {styles.container}>
        <Pressable
        onPress={onPress}
        style ={[styles.boundingContainer, styles[`container_${type}`]]}>
  
        <Text
          style={[styles.text, styles[`text_${type}`]]}>{text}
        </Text> 
        <Text style={styles.dateSmall}></Text>
      </Pressable>
      </View>
    );
  };

  const styles = StyleSheet.create({
    boundingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        verticalPadding: 8,
        gap: 8
      },

      userName:{
        
      },

      dateSmall: {
      }
    });

export default ContactsCard