import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style= {styles.container}>
            <TextInput 
                value= {value}
                onChangeText={setValue}
                placeholder = {placeholder}
                style={styles.input}
                secureTextEntry = {secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width:'100%',

        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius:12,
        paddingHorizontal:11,
        paddingVertical:25,
        marginVertical:5
        },
    input:{},
});

export default CustomInput