import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../../Components/Header";
import styles from './styles'
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scan({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`BarCode do tipo ${type} e dados ${data} foi escaneado!`);
  };

  if (hasPermission === null) {
    return <Text>Solicitando permissão da câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso a câmera</Text>;
  }

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
        <View style={styles.content}>
          <TouchableOpacity style={{alignItems: 'center'}} onPress={() => setScanned(true)}>
            <MaterialCommunityIcons
              name="barcode-scan"
              size={100}
              color="#fff"
              style={{ marginRight: 12 }}
              />
            <Text style={styles.text}>Clique para escanear</Text>
          </TouchableOpacity>
          {scanned &&  <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
              />}
        </View>
      </View>
    </>
  );
};



