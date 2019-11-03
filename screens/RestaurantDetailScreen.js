import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { RESTAURANTS } from '../data/restaurant-data'
import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  )
}

const RestaurantDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = RESTAURANTS.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.name}</Text>
        <Text>電話番号: {selectedMeal.tel}</Text>
        <Text>住所: {selectedMeal.address}</Text>
        <Text>料金: 1泊{selectedMeal.price}円~</Text>
        <Text>{selectedMeal.description}</Text>
      </View>
      {/* <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))} */}
    </ScrollView>
  );
}

RestaurantDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = RESTAURANTS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.name,
    headerStyle: { backgroundColor: Colors.primaryColor },
    headerTintColor: "#fff",
    // headerRight: (
    //   <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    //     <Item
    //       title="Favourite"
    //       iconName="ios-star"
    //       onPress={() => { }}
    //     />
    //   </HeaderButtons>
    // ),
  };
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10, 
  },
});

export default RestaurantDetailScreen;
