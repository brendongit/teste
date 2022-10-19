import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import circle from "../../../assets/circle.png";
import logo from "../../../assets/adaptive-icon.png";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={circle}
          alt=""
          style={{ width: "100%", position: "absolute", height: 700 }}
        />
        <Image
          source={logo}
          alt=""
          style={{ width: 160, height: 160, marginTop: 50 }}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 200,
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Scan")}
            style={{
              backgroundColor: "#18822F",
              width: "50%",
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Adicionar nota
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#035FB4",
              width: "50%",
              height: 40,
              marginTop: 25,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Gerar nota
            </Text>
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
});
