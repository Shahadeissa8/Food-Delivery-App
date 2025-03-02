import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
const Cart = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 10 }}>
        <Text style={{ fontSize: 30, padding: 10, fontWeight: "bold" }}>
          View Your Order{" "}
          <Fontisto name="heart-eyes" size={24} color="#CB3737" />
        </Text>
        <Image
          source={require("../../assets/giphy.gif")}
          style={{ alignSelf: "center", width: 444, height: 480 }}
        />

        <View
          style={{
            borderColor: "#CB3737",
            borderWidth: 2,
            padding: 20,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 30, padding: 10, fontWeight: "bold" }}>
            Your order is from:
          </Text>

          <Text style={{ fontSize: 25, padding: 10, fontWeight: "350" }}>
            Pasta Paradise
          </Text>
          <Text style={{ fontSize: 30, padding: 10, fontWeight: "bold" }}>
            Your cart:
          </Text>
          <Text style={{ fontSize: 20, padding: 10 }}>
            Spaghetti Carbonara....................12.99KD
          </Text>
          <Text style={{ fontSize: 20, padding: 10 }}>
            Tiramisu.........................................6.99KD
          </Text>
          <Text style={{ fontSize: 30, padding: 10, fontWeight: "bold" }}>
            Total price:
          </Text>
          <Text style={{ fontSize: 20, padding: 10 }}>
            ......................................................19.98KD
          </Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: "#E3E3E3",
              borderColor: "#EE6F57",
              borderWidth: 2,
              padding: 10,
              borderRadius: 10,
              width: 325,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
