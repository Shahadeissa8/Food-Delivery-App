import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RestaurantCards = ({
  RestImage,
  RestName,
  RestRating,
  RestDelTime,
  MenuItems,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        padding: 7,
        margin: 5,
        borderRadius: 10,
        alignItems: "center",
        width: 230,
      }}
      onPress={() => {
        navigation.navigate("MenuScreen", { MenuItems });
      }}
    >
      <View style={{ borderWidth: 2, borderRadius: 5 }}>
        <Image
          source={{
            uri: RestImage,
          }}
          width={200}
          height={200}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 5,
          fontWeight: "bold",
          fontSize: 30,
          color: "black",
        }}
      >
        {RestName}
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginTop: 5,
          fontWeight: "bold",
          fontSize: 20,
          color: "#FFA500",
        }}
      >
        ★ {RestRating}
      </Text>
      <Text
        style={{
          textAlign: "center",
          // marginTop: 5,
          // fontWeight: "bold",
          fontSize: 15,
          color: "black",
        }}
      >
        {RestDelTime}
      </Text>
    </TouchableOpacity>
  );
};

export default RestaurantCards;

const styles = StyleSheet.create({});
