import { FeaturedProducts } from "../index.component";
import Wrapper from "./productsContainer.styles";

const ProductsContainer = () => {
  return (
    <Wrapper>
      <div className="container main-container">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>
      <FeaturedProducts />
    </Wrapper>
  );
};

export default ProductsContainer;
