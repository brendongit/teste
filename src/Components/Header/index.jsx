import React from "react";
import { View, Text } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import styles from "./styles"

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