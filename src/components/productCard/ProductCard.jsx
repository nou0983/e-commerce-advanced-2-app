import { Link } from "react-router-dom";
import Wrapper from "./productCard.styles";

const ProductCard = ({ category, id, imageUrl, name, onSale, price }) => {
  return (
    <Wrapper>
      <Link to={`/product/${category}/${id}`}>
        <div className="img-container">
          <img src={imageUrl} alt={name} />
          <img
            src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt={name}
          />
          {onSale && <span className="new-tag">on sale now</span>}
        </div>
        <h5>
          <span>{name}</span>
          <span className="price">${price}</span>
        </h5>
      </Link>
    </Wrapper>
  );
};

export default ProductCard;
