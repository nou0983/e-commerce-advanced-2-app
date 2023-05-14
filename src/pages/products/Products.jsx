import { useParams } from "react-router-dom";
import {
  FilterContainer,
  ProductsContainer,
} from "../../components/index.component";
import Wrapper from "./products.styles";

const Products = () => {
  const { category } = useParams();

  return (
    <Wrapper className="container-large">
      <FilterContainer />
      <article>
        <ProductsContainer />
      </article>
    </Wrapper>
  );
};
export default Products;
