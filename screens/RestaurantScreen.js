import React from 'react';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import CardList from '../components/CardList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { RESTAURANTS } from '../data/restaurant-data';


const RestaurantScreen = (props) => {
  return (
    <CardList
      listData={RESTAURANTS}
      navigation={props.navigation}
    />
  );
};

RestaurantScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "レストラン",
    headerStyle: { backgroundColor: Colors.primaryColor },
    headerTintColor: "#fff",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }} />
      </HeaderButtons>
    )
  };
};

export default RestaurantScreen;
