import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import CategoriesScreen from "./src/screens/Home/HomeScreen";
import ResturantsLists from "./src/components/Home/RestaurantCollection";
import RestaurantScreen from "./src/screens/Home/RestaurantScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation/AuthNavigation";
import HomeNavigation from "./src/navigation/HomeNavigation/HomeNavigation";
import MainBottomNavigation from "./src/navigation/MainBottomNavigation/MainBottomNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cart from "./src/screens/Cart";
import UserContext from "./src/context/UserContext";
import { useEffect, useState } from "react";
import { getToken } from "./src/api/storage";
export default function App() {
  const queryClient = new QueryClient();
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});
  const checkToken = async () => {
    const token = await getToken();
    if (token) {
      setIsAuth(true);
    }
  };
  useEffect(() => {
    checkToken();
  });
  //we use use effect bc we want app.js to first
  // when the app opens excutes the useeffect function
  // (it always excutes useeffect first)
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider
          value={{ isAuth, setIsAuth, userData, setUserData }}
        >
          {/* //populating */}
          {/* <View> */}

          {isAuth ? <MainBottomNavigation /> : <AuthNavigation />}

          {/* <HomeNavigation /> */}
          {/* <Register /> */}
          {/* <Login /> */}
          {/* <HomeScreen /> */}
          {/* <RestaurantScreen /> */}
          {/* </View> */}
        </UserContext.Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDCFD6",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
//rule of thumb always put hooks (that contain use) right after the default function
//a piece of reusable ui
//compoennets:
// View=>div
//text => h1
//image => img
//TextInput=>input
//Button => button
//Pressable => a
//TouchableOpacity: is dimming the btn to show the user that he had clicked on it

//Q's
//what does width do in register
//how can i make each page a different color?
