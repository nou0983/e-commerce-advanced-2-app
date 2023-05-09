import Category from "../category/Category";
import Wrapper from "./categories.styles";

const Categories = () => {
  const categories = [
    {
      title: "sale",
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "women",
      img: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "new season",
      img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "men",
      img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "accessories",
      img: "https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      title: "shoes",
      img: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <Wrapper>
      <div className="col">
        {categories.slice(0, 2).map((category, index) => {
          return <Category key={index} {...category} />;
        })}
      </div>
      <div className="col">
        <Category key="2" {...categories[2]} high={true} />
      </div>
      <div className="col col-large">
        {categories.slice(3).map((category, index) => {
          return <Category key={index} {...category} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Categories;
