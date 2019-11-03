import React from 'react';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import CardList from '../components/CardList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { HOTELS } from '../data/hotel-data';


const HotelScreen = (props) => {
  return (
    <CardList
      listData={HOTELS}
      navigation={props.navigation}
    />
  );
}

HotelScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "宿泊",
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

export default HotelScreen;
