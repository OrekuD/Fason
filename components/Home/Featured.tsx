import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Text from "../Text";
import { HomeStackParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProductCard } from "../Cards";
import { featured } from "../../data/products";

interface FeaturedProps {
  navigation: StackNavigationProp<HomeStackParamList, "Home">;
}

const Featured = ({ navigation }: FeaturedProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text size="medium">Featured</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Featured")}
        >
          <Text size="small">See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featured.slice(0, 3).map((product, index) => (
          <ProductCard key={index} product={product} first={index === 0} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Featured;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});
