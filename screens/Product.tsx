import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { white, lightgrey, blue } from "../constants/Colors";
import { Text, BackHeader } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../types";
import { height } from "../constants/Layout";
import { RectButton } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ProductProps {}

const Product = ({
  navigation,
  route,
}: StackScreenProps<HomeStackParamList, "Product">) => {
  const { top: height } = useSafeAreaInsets();
  const { details, image, name, price } = route.params.product;
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <View style={{ paddingHorizontal: 20 }}>
          <Image source={image} resizeMode="cover" style={styles.image} />
          <Text style={{ marginVertical: 10 }}>{name}</Text>
          <Text style={{ marginVertical: 5 }} color="blue">
            ${price}.00
          </Text>
          <View style={styles.separator} />
          <View style={styles.ratingContainer}>
            <RectButton style={styles.rating}>
              <Text color="white" size="small">
                4.5
              </Text>
            </RectButton>
            <Text style={{ marginLeft: 15 }}>Very Good</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <Text style={{}} color="blue" size="small">
                49 Reviews
              </Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={26}
                color={blue}
                style={{ marginTop: 4 }}
              />
            </View>
          </View>
          <View style={styles.separator} />
          <Text size="small" style={{ marginVertical: 10 }}>
            Description
          </Text>
          <Text
            size="small"
            color="grey"
            numberOfLines={5}
            style={{ marginBottom: 15 }}
          >
            {details}
          </Text>
          <View style={styles.separator} />
          <Text
            weight="medium"
            style={{ textAlign: "center", marginVertical: 10 }}
          >
            Select Size
          </Text>
          <View style={styles.separator} />
        </View>
      </ScrollView>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: height / 3,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: lightgrey,
    marginVertical: 3,
  },
  ratingContainer: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: blue,
  },
});
