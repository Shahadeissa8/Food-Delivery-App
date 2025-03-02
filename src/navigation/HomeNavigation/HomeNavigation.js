import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantScreen from "../../screens/Home/RestaurantScreen";
import HomeScreen from "../../screens/Home/HomeScreen";
import MenuScreen from "../../screens/MenuScreen";
import MenuInHomeScreen from "../../screens/Home/MenuInHomeScreen";

const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RestaurantsScreen" component={RestaurantScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="MenuInHomeScreem" component={MenuInHomeScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
