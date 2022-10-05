import React from 'react';
import LottieView from 'lottie-react-native';
import { Button, StyleSheet, Text, View } from 'react-native';

const Scan = ({ navigation }) => {
  return ( 
    <>
    <Text style={styles.text}>Testando - Scan </Text>
    <View style={styles.container}>
      <LottieView
        autoPlay
        source={require('../../../assets/json/scan.json')} />
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