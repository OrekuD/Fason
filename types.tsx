import { ImageRequireSource } from "react-native";

export interface AppContext {
  cart: ProductProps[];
  favourites: ProductProps[];
  manageCart: (
    action: "ADD" | "REMOVE" | "EMPTY" | "INCREASE" | "DECREASE",
    payload?: ProductProps
  ) => void;
  manageFavourites: (action: "ADD" | "REMOVE", payload: ProductProps) => void;
  isProductInCart: (product: ProductProps) => boolean;
  isProductInFavourites: (product: ProductProps) => boolean;
  cartTotal: number;
}

export type RootStackParamList = {
  GetStarted: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Main: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  MenCategory: undefined;
  KidsCategory: undefined;
  WomenCategory: undefined;
  Featured: undefined;
  BestSell: undefined;
  AllCategories: undefined;
  Product: { product: ProductProps };
};

export type FavoriteStackParamList = {
  Favorite: undefined;
  Product: { product: ProductProps };
};

export type CartStackParamList = {
  Cart: undefined;
  Address: undefined;
  AddAddress: undefined;
  Payment: undefined;
  Checkout: undefined;
  Confirmation: undefined;
};

export interface Category {
  name: string;
  screen: keyof HomeStackParamList;
  colors: string[];
  image: ImageRequireSource;
}

export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  MyCart: undefined;
  Favorite: undefined;
  MyOrders: undefined;
  Language: undefined;
  Settings: undefined;
};

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  count: number;
  total: number;
  image: ImageRequireSource;
  details: string;
}

export interface Address {
  name: string;
  house: string;
  road: string;
}
