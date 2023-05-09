import { Link } from "react-router-dom";
import Wrapper from "./productCard.styles";

const ProductCard = ({ id, img, img2, title, isNew, oldPrice, price }) => {
  return (
    <Wrapper>
      <Link to={`/product/${id}`}>
        <div className="img-container">
          <img src={img} alt={title} />
          <img src={img2} alt={title} />
          {isNew && <span className="new-tag">new season</span>}
        </div>
        <h4>{title}</h4>
        <h5>
          <span className="old-price">${oldPrice}</span>
          <span className="price">${price}</span>
        </h5>
      </Link>
    </Wrapper>
  );
};

export default ProductCard;
