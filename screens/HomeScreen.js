import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const HomeScreen = (props) => {
  const scannedData = useSelector(state => state.qr.qr.data)
  const [selectedImage, setSelectedImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EjvkRoy42l1dFnZNFb17qOmd8WGpuOiJn2xUjigouLoez_cTMQ&s");

  const moveToQRScreenHandler = () => {
    props.navigation.navigate('QRReader');
  }

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

  const takeImageHandler = async () => {
    const hasPermission = await getPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      quality: 0.5,
    });

    setSelectedImage(image.uri);
  };

  return (
    <ImageBackground
      source={{ uri: selectedImage }}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={styles.points}>
        <Text style={styles.points}>{scannedData}Points</Text>
      </View>

      <Button
        title="Scan QRcode"
        onPress={moveToQRScreenHandler}
      />
      <Button
        title="select Background Image"
        onPress={takeImageHandler}
      />
    </ImageBackground >
  );
};

HomeScreen.navigationOptions = () => {
  return {
    headerTitle: "ホーム",
  };
};

const styles = StyleSheet.create({});

export default HomeScreen;
