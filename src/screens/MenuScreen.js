import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MenuList from "../components/Home/MenuList";

const MenuScreen = ({ route }) => {
  const { MenuItems } = route.params;
  // console.log(first);
  return (
    <View>
      <MenuList MenuItems={MenuItems} />
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
