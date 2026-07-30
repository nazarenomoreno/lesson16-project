
import UseCart from "../hooks/useCart";

type PropsType={
    viewCart: boolean;
}


const Footer = ({viewCart}: PropsType) => {
  const {totalItems, totalPrice} = UseCart();

  const year:number = new Date().getFullYear();

  const pageContent = viewCart
  ? <p>Shopping Cart &copy; {year}</p>
  : (
    <>
        <p> totalItems: {totalItems}</p>
        <p> totalPrice: {totalPrice}</p>
        <p> Shopping Cart: &copy; {year}</p>
    </>
  )

  const content = (
    <footer className="footer">
      {pageContent}
    </footer>
  );

  return content
};

export default Footer;
 