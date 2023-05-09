import ProductCard from "../productCard/ProductCard";
import { featuredProducts } from "../../utils/constants.utils";
import Wrapper from "./featuredProducts.styles";;

const FeaturedProducts = ({ heading, text }) => {
  return (
    <Wrapper className="container">
      <div className="header">
        <h2 className="heading-secondary">{heading}</h2>
        <p>{text}</p>
      </div>
      <ul className="products-list">
        {featuredProducts.map((featuredProduct) => {
          return <ProductCard key={featuredProduct.id} {...featuredProduct} />;
        })}
      </ul>
    </Wrapper>
  );
};

export default FeaturedProducts;
