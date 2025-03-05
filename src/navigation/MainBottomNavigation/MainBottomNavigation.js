import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "../HomeNavigation/HomeNavigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Cart from "../../screens/Cart";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { deleteToken } from "../../api/storage";
import UserContext from "../../context/UserContext";
import { profile } from "../../api/Profile";
import AntDesign from "@expo/vector-icons/AntDesign";
import Profile from "../../screens/Profile";
const Tab = createBottomTabNavigator();
const MainBottomNavigation = () => {
  const { isAuth, setIsAuth } = useContext(UserContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      }}
    >
      {/* <Tab.Screen name="AuthNavigation" component={AuthNavigation} /> */}
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CartNavigation"
        component={Cart}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomNavigation;

const styles = StyleSheet.create({});
