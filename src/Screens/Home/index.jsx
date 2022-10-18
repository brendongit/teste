import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import circle from '../../../assets/circle.png';
import logo from '../../../assets/adaptive-icon.png';

const Home = ({ navigation }) => {
  return ( 
    <><View style={styles.container}>
      <Image source={circle} alt="" style={{width: '100%', position: 'absolute'}}/>
      <Image source={logo} alt="" style={{width: 150, height: 150}}/>
      <TouchableOpacity>
        <Text>
          aaaaa
        </Text>
      </TouchableOpacity>
    </View><Button title="Go to Scan" onPress={() => navigation.navigate('Scan')} /></>
   );
}
 
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#101114',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  }
});