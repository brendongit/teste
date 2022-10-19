import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons'; 
import Header from "../../Components/Header";

const GenerateNote = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Header
          style={styles.component}
          title="Notas"
          navigation={navigation}
          icon={
            <AntDesign
              name="filetext1"
              size={24}
              color="#fff"
              style={{ marginRight: 12 }}
            />
          }
        />
        <View style={styles.content}>
          <Text style={styles.text}>Testando - Notas </Text>
        </View>
      </View>
    </>
  );
};

export default GenerateNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#101114'
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
