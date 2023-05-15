import { useProductsContext } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";
import CartModalItem from "../cartModalItem/CartModalItem";
import Wrapper from "./cartModal.styles";

const CartModal = () => {
  const { cart, toggleCart } = useProductsContext();

  return (
    <Wrapper>
      {cart.length <= 0 ? (
        <li className="empty-list">your cart is empty</li>
      ) : (
        cart.map((item) => {
          return <CartModalItem key={item.name} {...item} />;
        })
      )}
      <Link to="/cart" className="btn" onClick={() => toggleCart(false)}>
        go to your cart
      </Link>
    </Wrapper>
  );
};

export default CartModal;
