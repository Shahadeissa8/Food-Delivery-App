import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
// import restaurantCategories from "../../data/Home/RestaurantCategories";
const CategoriesCards = ({
  category, //(receiving it here, defined it in CategoriesList.js) */,
}) => {
  const navigation = useNavigation();
  return (
    //touchable opcity on press //takes u to bnavigation.navigate>
    <TouchableOpacity
      style={{
        borderWidth: 2,
        borderColor: "#CB3737",
        // backgroundColor: "E3E3E3",
        padding: 7,
        marginStart: 5,
        marginEnd: 5,
        borderRadius: 10,
        alignItems: "center",
        width: 230,
      }}
      onPress={() => {
        navigation.navigate("RestaurantsScreen", { catName: category.name });
        //the second category is defined above (taken from category list) then here
        //the first is defined here it will be taken to restaurantscreen.
        //const { category } = route.params; this is from restaurantscreen.
        //we passed it there to restauarntcollection. so it is used there.
        //then there it was used to filter, like this:
        //const RestaurantCollection = ({ category }) => {
        // const DisplayRestaurants = restaurants
        // .filter((rest) => rest.category (((this one is taken from restauarnat list in data)))
        //  === category.categoryName)(((this one that we passed from before,, categoryname is
        // taken from restauarntcategories from data)))

        // "category" journey:
        //    CategoriesList -> CategoriesCards -> RestaurantScreen -> RestaurantCollection
      }}
    >
      <View style={{ borderWidth: 2, borderRadius: 5 }}>
        <Image
          source={{
            uri: category.image,
          }}
          width={200}
          height={100}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 5,
          fontWeight: "bold",
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};
export default CategoriesCards;

const styles = StyleSheet.create({});
