import ProductCard from "../productCard/ProductCard";
import Wrapper from "./featuredProducts.styles";

const FeaturedProducts = ({ heading, text, products, category }) => {

  return (
    <Wrapper className="container">
      <div className="header">
        <h2 className="heading-secondary">{heading}</h2>
        <p>{text}</p>
      </div>
      <ul className="products-list">
        {products.map((product) => {
          return <ProductCard key={product.id} category={category} {...product} />;
        })}
      </ul>
    </Wrapper>
  );
};

export default FeaturedProducts;
