import { useContext } from "react";
import CartContext from "../context/CartProvider"; 
import type { useCartContextType } from "../context/CartProvider";


const UseCart = (): useCartContextType => {
    return useContext(CartContext);
};
 
export default UseCart;


