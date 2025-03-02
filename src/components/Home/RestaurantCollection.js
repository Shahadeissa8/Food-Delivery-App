import { StyleSheet, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
// import restaurants from "../../data/Home/RestaurantList";
import { getAllRestaurants } from "../../api/rest";
import { useQuery } from "@tanstack/react-query";

const RestaurantCollection = ({ category }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["GetAllRestaurants"],
    queryFn: getAllRestaurants,
  });
  // const [restaurantsBe, setRestaurantsBe] = useState([]);
  // useEffect(() => {
  //   const fetchRestaurants = async () => {
  //     const rest = await getAllRestaurants();
  //     setRestaurantsBe(rest);
  //   };
  //   fetchRestaurants();
  // });
  const DisplayRestaurants = data
    ?.filter((rest) => rest.category.name === category)
    .map((Rest) => {
      return (
        <RestaurantCards
          RestImage={Rest.image}
          RestName={Rest.name}
          RestRating={Rest.rating}
          RestDelTime={Rest.deliveryTime}
          MenuItems={Rest.items}
        />
      );
    });
  return (
    <ScrollView
      style={{
        width: "100%",
      }}
    >
      {DisplayRestaurants}
      {/* {DisplayMenu} */}
    </ScrollView>
  );
};

export default RestaurantCollection;

const styles = StyleSheet.create({});
