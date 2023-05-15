import { useProductsContext } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";
import Wrapper from "./cartContainer.styles";
import CartItem from "../cartItem/CartItem";

const CartContainer = () => {
  const { cart, clearCart } = useProductsContext();

  return (
    <Wrapper>
      <div className="header">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
      </div>
      {cart.length <= 0 ? (
        <p className="empty-text">your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
      )}
      <div className="btn-container">
        <Link to="/" className="btn">
          continue shopping
        </Link>
        <button type="button" className="btn" onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
    </Wrapper>
  );
};

export default CartContainer;
