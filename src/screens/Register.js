import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/Auth";
import UserContext from "../context/UserContext";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const Register = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState("");
  const { isAuth, setIsAuth } = useContext(UserContext);
  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo, image),
    onSuccess: () => {
      alert("Account Created"); //why not working???
      setIsAuth(true);
    },
    // onError: () => {
    //   alert("Error Occurred");
    // },
    onError: (error) => {
      console.error("Mutation Error:", error);
      alert(`Error Occurred: ${error.message || "Unknown error"}`);
    },
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
        Register Now!
      </Text>
      <View
        style={{
          margin: 10,
        }}
      >
        <Text style={{ fontSize: 22, marginBottom: 5, marginLeft: 10 }}>
          Enter your name:
          <Text style={{ color: "red" }}>*</Text>
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
        <TouchableOpacity
          onPress={() => {
            pickImage();
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginBottom: 5,
              color: "black",
              marginLeft: 10,
            }}
          >
            Upload Profile Picture
            <Text style={{ color: "red" }}>*</Text>
          </Text>
        </TouchableOpacity>
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 200,
              height: 200,
            }}
          />
        )}
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
          marginTop: -5,
        }}
        onPress={() => {
          console.log(userInfo);
          console.log("Sign Up button clicked");
          console.log("User Info:", userInfo);
          console.log("Image URI:", image);
          mutate();
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Sign up</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#6F4E37" }}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{
              color: "#CB3737", // Dark coffee brown
              fontWeight: "bold",
            }}
          >
            Login
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
