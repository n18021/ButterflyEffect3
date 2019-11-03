import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from "./Card";


export default (props) => {
  const renderRestItem = (itemData) => {
    return (
      <Card
        name={itemData.item.name}
        imageUrl={itemData.item.imageUrl}
        address={itemData.item.address}
        onSelectItem={() => {
          props.navigation.navigate({
            routeName: 'RestaurantDetail',
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />);
  };

  return (
    <View style={styles.list} >
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderRestItem}
        style={{ width: "100%" }}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

