
import Nav from "./Nav";
import UseCart from "../hooks/useCart";

type PropsType = {
    viewCart: boolean;
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}




const Header = ({ viewCart, setViewCart }: PropsType) => {

  const {totalItems, totalPrice} = UseCart();

  const content = (
    <header className="header">
        <div className="header_title-bar">
            <h1>Acme co.</h1>
            <div className="header_price-box">
                <p>Total items: {totalItems}</p>
                <p>Total price: {totalPrice}</p>
            </div>
        </div>
        <Nav viewCart={viewCart} setViewCart={setViewCart}></Nav>
    </header>
    
  )

  return content
};

export default Header;


 