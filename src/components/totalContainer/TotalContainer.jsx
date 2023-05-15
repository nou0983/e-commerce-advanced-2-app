import { useProductsContext } from "../../contexts/ProductsContext";
import { useUserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import Wrapper from "./totalContainer.styles";

const TotalContainer = () => {
  const { totalPrice, totalQuantity } = useProductsContext();
  const { currentUser } = useUserContext();

  return (
    <Wrapper>
      <p>
        <span>total items</span>
        {totalQuantity}
      </p>
      <p>
        <span>subtotal</span> ${totalPrice.toFixed(2)}
      </p>
      <p>
        <span>shipping fee</span> $5.00
      </p>
      <h3 className="heading-tertiary">
        <span>order total</span> ${(totalPrice + 5).toFixed(2)}
      </h3>
      {currentUser ? (
        <Link to="/checkout" className="btn">
          proceed to checkout
        </Link>
      ) : (
        <div>
          <p className="login-text">Please login first to complete your purchase.</p>
          <Link to="/authentication" className="btn">
            sign in
          </Link>
        </div>
      )}
    </Wrapper>
  );
};

export default TotalContainer;
