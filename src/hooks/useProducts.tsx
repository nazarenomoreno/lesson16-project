

import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider"; 
import type { UseProductsContextType } from "../context/ProductsProvider";


const UseProducts = (): UseProductsContextType => {
    return useContext(ProductsContext);
};
 
export default UseProducts;


