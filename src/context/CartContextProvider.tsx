import { ReactNode, useState } from "react";
import DonutResponse from "../models/DonutResponse";
import CartContext from "./CartContext";

interface Props {
  children: ReactNode;
}

const FavoritesContextProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<DonutResponse[]>([]);
  const addToCart = (cart: DonutResponse): void => {
    setCart((prev) => [...prev, cart]);
  };
  const removeItem = (id: number): void => {
    setCart((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default FavoritesContextProvider;
