import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import circle from "../../../assets/circle.png";
import logo from "../../../assets/adaptive-icon.png";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Image source={circle} alt="" style={styles.circleBackground} />
        <Image source={logo} alt="" style={styles.logoImage} />
        <View style={styles.containerButtons}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Scan")}
            style={styles.buttonAddNote}
          >
            <Text style={styles.textButton}>Adicionar nota</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => navigation.navigate("GenerateNote")}
          style={styles.buttonGenerateNote}>
            <Text style={styles.textButton}>Gerar nota</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#101114",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  circleBackground: {
    width: "100%",
    position: "absolute",
    height: 700,
  },
  logoImage: {
    width: 160,
    height: 160,
    marginTop: 50,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  containerButtons: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: "100%",
  },
  buttonAddNote: {
    backgroundColor: "#18822F",
    width: "50%",
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGenerateNote: {
    backgroundColor: "#035FB4",
    width: "50%",
    height: 40,
    marginTop: 25,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
