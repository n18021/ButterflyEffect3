import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default (props) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={props.onSelectItem}>
        <View>
          <View style={{ ...styles.row, ...styles.header }}>
            <ImageBackground source={{ uri: props.imageUrl }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{props.name}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.detail }}>
            <Text>{props.name}</Text>
            <Text>{props.address}</Text>
            <Text>{props.budget}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: "row",
  },
  header: {
    height: "80%",
  },
  detail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titleContainer: {
    backgroundColor: "rgba(0 ,0 ,0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});
