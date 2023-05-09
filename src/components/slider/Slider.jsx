import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Wrapper from "./slider.styles";

const Slider = () => {
  const imgs = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(checkNumber(currentImage + 1));
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, [currentImage]);

  const checkNumber = (num) => {
    if (num < 0) {
      return imgs.length - 1;
    } else if (num >= imgs.length) {
      return 0;
    }

    return num;
  };

  const prevImage = () => {
    setCurrentImage(checkNumber(currentImage - 1));
  };

  const nextImage = () => {
    setCurrentImage(checkNumber(currentImage + 1));
  };

  return (
    <Wrapper>
      <div className="img-container">
        {imgs.map((img, index) => {
          let position = "";

          if (currentImage === index) {
            position = "img-active";
          } else if (
            currentImage - 1 === index ||
            (currentImage === 0 && index === imgs.length - 1)
          ) {
            position = "img-prev";
          } else {
            position = "img-next";
          }

          return (
            <img key={index} src={img} alt="Images" className={position} />
          );
        })}
      </div>
      <div className="btn-container">
        <button type="button" onClick={prevImage}>
          <ArrowBackIcon />
        </button>
        <button type="button" onClick={nextImage}>
          <ArrowForwardIcon />
        </button>
      </div>
    </Wrapper>
  );
};

export default Slider;
