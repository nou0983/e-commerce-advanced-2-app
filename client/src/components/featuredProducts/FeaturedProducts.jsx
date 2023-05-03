import ProductCard from "../productCard/ProductCard";
import Wrapper from "./featuredProducts.styles";

const FeaturedProducts = ({ heading }) => {
  const featuredProducts = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <Wrapper className="container">
      <div className="header">
        <h2 className="heading-secondary">{heading}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus,
          itaque asperiores quod facilis ad sequi, nemo odio quas, aspernatur
          maiores vitae expedita nisi atque incidunt laboriosam ducimus quaerat?
          Fugiat!
        </p>
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
