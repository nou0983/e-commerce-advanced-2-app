import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Wrapper from "./cartItem.styles";
import { useProductsContext } from "../../contexts/ProductsContext";

const CartItem = ({ id, imageUrl, name, price, quantity }) => {
  const { updateItemQuantity, removeItem } = useProductsContext();

  const prevHandler = () => {
    const newQuantity = quantity - 1;

    if (newQuantity >= 1) {
      updateItemQuantity(id, newQuantity);
    } else {
      removeItem(id);
    }
  };

  const nextHandler = () => {
    const newQuantity = quantity + 1;

    if (newQuantity <= 9) {
      updateItemQuantity(id, newQuantity);
    }
  };

  return (
    <Wrapper>
      <h6 className="image-container">
        <img src={imageUrl} alt={name} />
        {name}
      </h6>
      <h6>${price}</h6>
      <h6 className="quantity-container">
        <button type="button" onClick={prevHandler}>
          <RemoveIcon />
        </button>
        {quantity}
        <button type="button" onClick={nextHandler}>
          <AddIcon />
        </button>
      </h6>
      <h6>{price * quantity}</h6>
    </Wrapper>
  );
};

export default CartItem;
