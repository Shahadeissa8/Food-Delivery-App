import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import CategoriesList from "../../components/Home/CategoriesList";
import RestaurantScreen from "./RestaurantScreen";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { deleteToken } from "../../api/storage";
import UserContext from "../../context/UserContext";
import MenuList from "../../components/Home/MenuList";
import MenuListInHome from "../../components/Home/MenuListInHome";
const HomeScreen = () => {
  const { isAuth, setIsAuth } = useContext(UserContext);
  const navigation = useNavigation();
  return (
    <View style={{ padding: 10 }}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Welcome, are you..</Text>
        <TouchableOpacity
          onPress={() => {
            deleteToken();
            setIsAuth(false);
          }}
        >
          <MaterialIcons name="logout" size={28} color="#EE6F57" />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../../assets/hungry-27-15425.gif")}
        style={{ alignSelf: "center", width: 500, height: 270, margin: 50 }}
      />
      <Text style={styles.category}>Feed your belly, choose a cuisine </Text>
      <View style={{ marginLeft: 1, marginRight: 1, marginTop: 10 }}>
        <CategoriesList />
      </View>

      {/* <View>
        <MenuListInHome />
      </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 1,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 30,
  },
  category: {
    fontSize: 25,
    alignSelf: "center",
  },
});
