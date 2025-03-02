import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";
// import { useNavigation } from "@react-navigation/native";

const MenuCard = ({ menuName, menuPrice, menuImage }) => {
  // const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <View style={{ borderWidth: 2, borderRadius: 5 }}>
        <Image
          source={{
            uri: menuImage,
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
        {menuName}
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 5,
          fontWeight: "bold",
        }}
      >
        {menuPrice}
      </Text>
      {/* onPress=
      {() => {
        navigation.navigate("RestaurantsScreen");
      }} */}
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({});
