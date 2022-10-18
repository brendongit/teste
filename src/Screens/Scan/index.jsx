import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Scan = ({ navigation }) => {
  return ( 
    <>
    <View style={styles.container}>
    <Text style={styles.text}>Testando - Scan </Text>
    </View><Button title="Go back" onPress={() => navigation.goBack()} /></>
   );
}
 
export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
  }
});