import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import RestaurantCollection from "../../components/Home/RestaurantCollection";
// import restaurants from "../../data/Home/RestaurantList";
import RestaurantCards from "../../components/Home/RestaurantCards";
import { useNavigation } from "@react-navigation/native";

const RestaurantScreen = ({ route }) => {
  const navigation = useNavigation();
  const { catName } = route.params;
  return (
    <View style={styles.container}>
      {/* <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 30 }}>
        Choose a restaurant
      </Text> */}
      <View
        style={{ marginLeft: 5, marginRight: 5, alignSelf: "center", flex: 1 }}
      >
        {/* <RestaurantCards
          RestImage={restaurant.image}
          RestName={restaurant.name}
        /> */}
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("MenuScreen", {
              // // category: "Italian",
              // id: item.id,
              MenuItems:
            });
          }}
        ></TouchableOpacity> */}
        <RestaurantCollection category={catName} />
      </View>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDCFD6",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
