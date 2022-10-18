import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => {
  return ( 
    <><View style={styles.container}>
      <Text style={styles.text}>Testando - Home </Text>
    </View><Button title="Go to Scan" onPress={() => navigation.navigate('Scan')} /></>
   );
}
 
export default Home;

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