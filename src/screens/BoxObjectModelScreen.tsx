import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
   <View style={styles.container}>
        <Text style={styles.text}>
            BoxObjectModel
        </Text>
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'lime'
  },
  text: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    fontSize: 50,
    marginBottom: 10,
    borderWidth: 5
  }
});