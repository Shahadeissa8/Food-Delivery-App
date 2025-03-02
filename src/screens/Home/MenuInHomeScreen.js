import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import MenuList from "../components/Home/MenuList";
import MenuListInHome from "../../components/Home/MenuListInHome";

const MenuInHomeScreen = ({ route }) => {
  const { MenuItems } = route.params;
  // console.log(first);
  return (
    <View>
      <MenuListInHome MenuItems={MenuItems} />
    </View>
  );
};

export default MenuInHomeScreen;

const styles = StyleSheet.create({});
