import {
  Slider,
  FeaturedProducts,
  Categories,
  Subscribe,
} from "../../components/index.component";

const Home = () => {
  return (
    <section>
      <Slider />
      <FeaturedProducts
        heading="featured products"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus,
          itaque asperiores quod facilis ad sequi, nemo odio quas, aspernatur
          maiores vitae expedita nisi atque incidunt laboriosam ducimus quaerat?
          Fugiat!"
      />
      <Categories />
      <FeaturedProducts
        heading="trending products"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus,
          itaque asperiores quod facilis ad sequi, nemo odio quas, aspernatur
          maiores vitae expedita nisi atque incidunt laboriosam ducimus quaerat?
          Fugiat!"
      />
      <Subscribe />
    </section>
  );
};
export default Home;
