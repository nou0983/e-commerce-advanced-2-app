import { useState } from "react";
import { useParams } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Wrapper from "./singleProduct.styles";
import { useProductsContext } from "../../contexts/ProductsContext";

const SingleProduct = () => {
  const { productId, category } = useParams();
  const { products, addItemToCart } = useProductsContext();
  const [quantity, setQuantity] = useState(1);

  const currentItem = products[category].find(
    (item) => item.id === Number(productId)
  );

  const { name, price } = currentItem;

  const onSubmitHandler = () => {
    addItemToCart(currentItem, quantity);
    setQuantity(1);
  };

  const onChangeHandler = (e) => {
    const newValue = Number(e.target.value);

    if (!isNaN(newValue)) {
      if (newValue >= 0 && newValue <= 9) {
        setQuantity(parseInt(newValue));
      }
    }
  };

  const checkNumber = (num) => {
    if (num <= 0) {
      return 1;
    }
    if (num >= 10) {
      return 9;
    }
    return num;
  };

  const prevHandler = () => {
    const newQuantity = quantity - 1;
    setQuantity(checkNumber(newQuantity));
  };

  const nextHandler = () => {
    const newQuantity = quantity + 1;
    setQuantity(checkNumber(newQuantity));
  };

  return (
    <Wrapper>
      <h2 className="heading-primary">{name}</h2>
      <h3 className="price">${price}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque
        voluptate labore aut animi repudiandae praesentium, eius maxime
        aspernatur perferendis hic placeat beatae repellendus ex in saepe fugit
        doloremque esse?
      </p>

      <div className="input-container">
        <button onClick={prevHandler}>
          <RemoveIcon />
        </button>
        <input
          type="text"
          name="quantity"
          min="1"
          max="9"
          value={quantity}
          onChange={onChangeHandler}
        />
        <button onClick={nextHandler}>
          <AddIcon />
        </button>
      </div>

      <button type="button" className="btn-add" onClick={onSubmitHandler}>
        <AddShoppingCartIcon /> add to cart
      </button>

      <div className="info-container">
        <h4>vendor: polo</h4>
        <h4>product type: t-shirt</h4>
        <h4>tag: t-shirt, women, top</h4>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;
