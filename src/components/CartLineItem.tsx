

import type { CartItemType } from "../context/CartProvider";
import type { ReducerAction } from "../context/CartProvider";
import type { ReducerActionType } from "../context/CartProvider";
import type { ReactElement } from "react";
import { memo } from "react";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
}

const CartLineItem = ({item, dispatch, REDUCER_ACTIONS}: PropsType) => {
  

  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href;

  const lineTotal:number  = (item.qty * item.price);

  const highestQty:number = 20>item.qty ? 20 : item.qty;

  const optionValues: number[] = [...Array(highestQty).keys()].map(i => i + 1);

  const options:ReactElement[] = optionValues.map(value => (
    <option key={`opt${value}`} value={value}>{value}</option>
  ));

  const onChangeQty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({type: REDUCER_ACTIONS.QUANTITY, 
    payload: {...item, qty:Number(e.target.value)}});
  }

  const onRemoveFromCart = () => {
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item
    });
  };


  const content = (
    <li className="cart__item">
      <img src={img} alt={item.name} className="cart__img" />
      <div aria-label="item Name">{item.name}</div> 
      <div aria-label="price Per Item">{new Intl.NumberFormat("en-US", {style: "currency",currency: "USD"}).format(item.price)}</div>

      <label htmlFor="item.Qty" className="offscreen">
        Item Quantity
      </label>

      <select id="itemQty" value={item.qty} onChange={onChangeQty} aria-label="Item Quantity">
        {options}
      </select>


      <div className="cart__item-subtotal" aria-label="Line Item Subtotal">
        {new Intl.NumberFormat("en-US", {style: "currency",currency: "USD"}).format(lineTotal)}
      </div>


      <button className="cart__button" aria-label="Remove Item from Cart" onClick={onRemoveFromCart}>
        ❌
      </button>
    </li>
  )
  

  return content 
};

function areItemsEqual(
  { item: prevItem }: PropsType, { item: nextItem }: PropsType) {return Object.keys(prevItem).every(
    key =>
      prevItem[key as keyof CartItemType] ===
      nextItem[key as keyof CartItemType]
  );
}

const MemoizedCartLineItem = memo(CartLineItem, areItemsEqual);

export default MemoizedCartLineItem;
    