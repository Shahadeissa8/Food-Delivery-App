import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import RestaurantCards from "./RestaurantCards";
import MenuInHomeCard from "./MenuInHomeCard";
const MenuListInHome = ({ MenuItems }) => {
  const displaymenu = MenuItems.map((item) => {
    return <MenuInHomeCard menuImage={item.image} menuName={item.name} />;
  });

  return <View>{displaymenu}</View>;
};

export default MenuListInHome;

const styles = StyleSheet.create({});
