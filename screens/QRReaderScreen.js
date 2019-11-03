import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import { updateScanData } from '../actions/qrAction'


const QRReaderScreen = (props) => {
  const [scanned, setScanned] = useState(false);

  const getPermissions = async () => {
    const results = await Promise.all([
      Permissions.askAsync(Permissions.CAMERA_ROLL),
      Permissions.askAsync(Permissions.CAMERA)
    ]);
    if (results.some(({ status }) => status !== 'granted')) {
      Alert.alert(
        "ButterflyEffect Would Like to Access the Camera", [{ text: "OKAY" }]
      );
      return false;
    }
    return true;
  };

  const scannedQRHandler = async ({ type, data }) => {
    const hasPermission = await getPermissions();
    if (!hasPermission) {
      return;
    }
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    props.navigation.navigate('Home');
  };


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BarCodeScanner
        onBarCodeRead={scanned ? undefined : scannedQRHandler}
        style={{ height: 300, width: 300 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default QRReaderScreen;
