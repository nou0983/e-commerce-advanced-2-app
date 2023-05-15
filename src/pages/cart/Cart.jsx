import {
  CartContainer,
  TotalContainer,
} from "../../components/index.component";
import Wrapper from "./cart.styles";

const Cart = () => {
  return (
    <Wrapper className="container">
      <div className="inner-container">
        <CartContainer />
        <TotalContainer />
      </div>
    </Wrapper>
  );
};

export default Cart;
