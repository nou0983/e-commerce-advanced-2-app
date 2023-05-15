import { useState } from "react";
import Wrapper from "./productImgContainer.styles";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../contexts/ProductsContext";

const ProductImgContainer = () => {
  const { category, productId } = useParams();
  const { products } = useProductsContext();
  const currentProduct = products[category].find(
    (item) => item.id === Number(productId)
  );

  const images = [
    {
      id: 1,
      url: currentProduct.imageUrl,
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <Wrapper>
      <header>
        {images.map((image) => {
          return (
            <img
              key={image.id}
              src={image.url}
              alt={image.id}
              onClick={() => setMainImage(image)}
            />
          );
        })}
      </header>
      <div>
        <img src={mainImage.url} alt={mainImage.id} className="main-image" />
      </div>
    </Wrapper>
  );
};

export default ProductImgContainer;
