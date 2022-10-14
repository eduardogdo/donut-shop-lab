import { createContext } from "react";
import DonutResponse from "../models/DonutResponse";

interface CartContextModel {
  cart: DonutResponse[];
  addToCart: (donut: DonutResponse) => void;
  removeItem: (id: number) => void;
}

const defaultValues: CartContextModel = {
  cart: [],
  addToCart: () => {},
  removeItem: () => {},
};

const CartContext = createContext(defaultValues);

export default CartContext;
