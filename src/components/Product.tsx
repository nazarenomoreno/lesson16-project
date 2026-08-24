
import type { Productype } from "../context/ProductsProvider";
import type { ReducerActionType, ReducerAction } from "../context/CartProvider";
import type { ReactElement,} from "react";
import { memo } from "react";


type PropsType = {
  product: Productype;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({product, dispatch, REDUCER_ACTIONS, inCart}: PropsType ):ReactElement => {


  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href;

  console.log(product.sku);
  console.log(img);

  const onAddToCart = ()=> dispatch({type: REDUCER_ACTIONS.ADD, payload: {...product, qty:1}})

  const itemInCart = inCart ? '-> Item in cart✅' : null

  const content = <article className="product">
    <h3>{product.name}</h3>
    <img src={img} alt={product.name} className="product-image" />
    <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}{itemInCart}</p>
    <button onClick={onAddToCart}>Add to Cart</button>
  </article>


  return content
};

function areProductsEqual ({product: prevProduct, inCart:prevInCart}:PropsType, {product: nextProduct, inCart: nextInCart}:PropsType) {
  return Object.keys(prevProduct).every(
    key => prevProduct[key as keyof Productype] === nextProduct[key as keyof Productype]
  ) && prevInCart === nextInCart;
}

const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default MemoizedProduct;









