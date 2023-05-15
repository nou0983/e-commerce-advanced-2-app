import {
  Slider,
  FeaturedProducts,
  Categories,
  Subscribe,
} from "../../components/index.component";
import { useProductsContext } from "../../contexts/ProductsContext";

const Home = () => {
  const { products } = useProductsContext();
  const featuredProducts = products.mens.slice(0, 4);
  const saleProducts = products.womens.slice(0, 4);

  return (
    <section>
      <Slider />
      <FeaturedProducts
        heading="featured products"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus,
          itaque asperiores quod facilis ad sequi, nemo odio quas, aspernatur
          maiores vitae expedita nisi atque incidunt laboriosam ducimus quaerat?
          Fugiat!"
        products={featuredProducts}
        category="mens"
      />
      <Categories />
      <FeaturedProducts
        heading="sales products"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus,
          itaque asperiores quod facilis ad sequi, nemo odio quas, aspernatur
          maiores vitae expedita nisi atque incidunt laboriosam ducimus quaerat?
          Fugiat!"
        products={saleProducts}
        category="womens"
      />
      <Subscribe />
    </section>
  );
};
export default Home;
