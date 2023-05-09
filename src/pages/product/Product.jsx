import {
  SingleProduct,
  ProductImgContainer,
} from "../../components/index.component";
import Wrapper from "./product.styles";

const Product = () => {
  return (
    <Wrapper className="container-large">
      <ProductImgContainer />
      <SingleProduct />
    </Wrapper>
  );
};

export default Product;
