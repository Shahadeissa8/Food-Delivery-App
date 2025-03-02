import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import RestaurantCards from "./RestaurantCards";
import MenuCard from "./MenuCard";
const MenuList = ({ MenuItems }) => {
  const displaymenu = MenuItems.map((item) => {
    return (
      <MenuCard
        menuImage={item.image}
        menuName={item.name}
        menuPrice={item.price}
      />
    );
  });

  return <View>{displaymenu}</View>;
};

export default MenuList;

const styles = StyleSheet.create({});
