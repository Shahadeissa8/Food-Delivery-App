import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import React from "react";
// import { useNavigation } from "@react-navigation/native";

const MenuInHome = ({ menuName, menuImage }) => {
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
    </TouchableOpacity>
  );
};

export default MenuInHome;

const styles = StyleSheet.create({});
