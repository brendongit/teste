import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../../Components/Header";

const Scan = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Header
          style={styles.component}
          title="Escanear"
          navigation={navigation}
          icon={
            <MaterialCommunityIcons
              name="barcode-scan"
              size={24}
              color="#fff"
              style={{ marginRight: 12 }}
            />
          }
        />
        <Text style={styles.text}>Testando - Scan </Text>
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </>
  );
};

export default Scan;

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
});
