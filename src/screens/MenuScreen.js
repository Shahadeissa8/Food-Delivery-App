import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import MenuList from "../components/Home/MenuList";

const MenuScreen = ({ route }) => {
  const { MenuItems } = route.params;
  // console.log(first);
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 70,
          fontFamily: "./src/Hanalei-Regular",
          alignSelf: "center",
          color: "#EE6F57",
        }}
      >
        (( IT IS ))
      </Text>
      <Image
        source={require("../../assets/200w.gif")}
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
        }}
      />
      <MenuList MenuItems={MenuItems} />
    </ScrollView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
