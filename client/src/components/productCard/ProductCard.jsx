import Wrapper from "./productCard.styles";

const ProductCard = ({ img, img2, title, isNew, oldPrice, price }) => {
  return (
    <Wrapper>
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <h5>
        <span className="old-price">${oldPrice}</span>
        <span className="price">${price}</span>
      </h5>
      {isNew && <span className="new-tag">new season</span>}
    </Wrapper>
  );
};

export default ProductCard;
