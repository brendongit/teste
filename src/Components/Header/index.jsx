import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title = "", icon }) {
  return (
    <View style={styles.content}>
      <View style={styles.textContent}>
        {icon}
        <Text style={styles.text}>{title}</Text>
      </View>
      <MaterialIcons.Button
        name="arrow-back-ios"
        size={25}
        color="#fff"
        backgroundColor="transparent"
        underlayColor="transparent"
        onPress={() => navigation.goBack()}
        style={{marginLeft: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  },

  textContent: {
    width: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  icon: {
    width: 60,
    left: 10,
  },
});