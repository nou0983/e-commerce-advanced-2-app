import { useParams } from "react-router-dom";
import { featuredProducts } from "../../utils/constants.utils";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Wrapper from "./singleProduct.styles";

const SingleProduct = () => {
  const { productId } = useParams();
  const { title, price } = featuredProducts[productId];

  return (
    <Wrapper>
      <h2 className="heading-primary">{title}</h2>
      <h3 className="price">${price}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque
        voluptate labore aut animi repudiandae praesentium, eius maxime
        aspernatur perferendis hic placeat beatae repellendus ex in saepe fugit
        doloremque esse?
      </p>

      <div className="input-container">
        <button>
          <RemoveIcon />
        </button>
        <input type="text" name="quantity" value="1" min="1" />
        <button>
          <AddIcon />
        </button>
      </div>

      <button type="button" className="btn-add">
        <AddShoppingCartIcon /> add to cart
      </button> 

      <div className="info-container">
        <h4>vendor: polo</h4>
        <h4>product type: t-shirt</h4>
        <h4>tag: t-shirt, women, top</h4>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;
