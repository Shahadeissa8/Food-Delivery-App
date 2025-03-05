import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
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
        style={{
          marginLeft: 5,
          marginRight: 5,
          // alignSelf: "center",
          alignItems: "center",
          // flex: 1,
          // alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontFamily: "./src/Hanalei-Regular",
            // alignSelf: "center",
            color: "#EE6F57",
          }}
        >
          (( Choose your restaurant ))
        </Text>
        {/* <Image
          source={require("../../assets/f12692cf-8b15-4ebc-9602-7b1985be92db_text.gif")}
          style={{
            alignSelf: "center",
            width: 200,
            height: 200,
            // backgroundColor: "red",
            padding: 20,
            // borderRightWidth: 10,
            // borderColor: "black",
            // borderWidth: 1,
            // borderRadius: 20,
          }} */}
        {/* /> */}
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
    backgroundColor: "#E3E3E3",
    alignSelf: "center",
    alignItems: "center",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
