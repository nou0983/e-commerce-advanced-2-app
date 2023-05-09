import { Link } from "react-router-dom";
import Wrapper from "./category.styles";

const Category = ({ title, img, high }) => {
  return (
    <Wrapper className={high ? "row-high" : ""}>
      <img src={img} alt={title} />
      <Link to={`products/${title}`} className="link">{title}</Link>
    </Wrapper>
  );
};

export default Category;
