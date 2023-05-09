import { useState } from "react";
import Wrapper from "./productImgContainer.styles";

const ProductImgContainer = () => {
  const images = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
