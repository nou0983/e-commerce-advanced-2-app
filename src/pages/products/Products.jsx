import { useParams } from "react-router-dom";
import { useProductsContext } from "../../contexts/ProductsContext";
import {
  FilterContainer,
  FeaturedProducts,
} from "../../components/index.component";
import Wrapper from "./products.styles";

const Products = () => {
  const { category } = useParams();
  const { products } = useProductsContext();
  const currentProducts = products[category];

  return (
    <Wrapper className="container-large">
      <FilterContainer />
      <article className="container">      
        <FeaturedProducts products={currentProducts} category={category} heading={category} />
      </article>
    </Wrapper>
  );
};
export default Products;
