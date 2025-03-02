import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/Auth";
import UserContext from "../context/UserContext";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const Register = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const { isAuth, setIsAuth } = useContext(UserContext);
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      alert("welcome");
      setIsAuth(true);
    },
    onError: (error) => {
      console.error("mutation error", error);
      alert(`Error Occurred: ${error.message || "Unknown error"}`);
    },
  });
  return (
    <View
      style={{
        borderWidth: 2,
        padding: 10,
        margin: 20,
        marginBlock: "auto",
        borderColor: "#CB3737",
        borderRadius: 20,
      }}
    >
      <Text style={{ alignSelf: "center" }}>
        <Ionicons name="pizza" size={50} color="#EE6F57" />
        <FontAwesome6 name="burger" size={50} color="#EE6F57" />
        <MaterialCommunityIcons name="pasta" size={50} color="#EE6F57" />
      </Text>
      <Text
        style={{
          fontSize: 50,
          fontWeight: "bold",
          alignSelf: "center",
          marginBottom: 10,
        }}
      >
        Login
      </Text>
      <View
        style={{
          // alignContent: "center",
          // flex: 7,
          // marginTop: -100,
          margin: 10,
        }}
      >
        <Text style={{ fontSize: 22, marginBottom: 5, marginLeft: 10 }}>
          Enter your name:
          <Text style={{ color: "red" }}>*</Text>{" "}
        </Text>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, username: value });
          }}
        />
        <Text style={{ fontSize: 20, marginBottom: 5, marginLeft: 10 }}>
          Enter your password:
          <Text style={{ color: "red" }}>*</Text>
        </Text>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, password: value });
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#E3E3E3",
          borderColor: "#EE6F57",
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          width: 300,
        }}
        onPress={() => {
          mutate();
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#6F4E37" }}>Don't have an account? </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text
            style={{
              color: "#CB3737", // Dark coffee brown
              fontWeight: "bold",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#E3E3E3",
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 10,
    alignSelf: "center",
    fontSize: 15,
    marginBottom: 5,
  },
});
