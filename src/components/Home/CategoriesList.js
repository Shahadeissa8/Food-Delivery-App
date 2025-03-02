import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategoriesCards from "./CategoriesCards";
// import restaurantCategories from "../../data/Home/RestaurantCategories";
import { getAllCategories } from "../../api/rest";
import { useQuery } from "@tanstack/react-query";

const CategoriesList = () => {
  // const [categoriesBe, setCategoriesBe] = useState([]);
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const categories = await getAllCategories();
  //     setCategoriesBe(categories);
  //   };
  //   fetchCategories();
  // });
  const { data, isLoading } = useQuery({
    queryKey: ["GetAllCategories"],
    queryFn: getAllCategories,
  });
  // console.log("yahoo");
  // console.log(data);
  const DisplayCategories = data?.map((Cat) => {
    return (
      <CategoriesCards
        category={Cat} //(defining category here)
      />
    );
  });
  return (
    <ScrollView
      style={{
        width: "100%",
        marginTop: 5,
      }}
      //   contentContainerStyle={{
      //     alignItems: "center",
      //   }}
      horizontal={true}
    >
      {DisplayCategories}
    </ScrollView>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({});
