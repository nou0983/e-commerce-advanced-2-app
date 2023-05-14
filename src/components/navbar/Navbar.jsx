import CartModal from "../cartModal/CartModal";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Wrapper from "./navbar.styles";
import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { useProductsContext } from "../../contexts/ProductsContext";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const { currentUser } = useUserContext();
  const { products } = useProductsContext();
  const categories = Object.keys(products);

  return (
    <Wrapper>
      <div className="nav-container">
        <div className="nav-header">
          <ul className="product-list">
            <li>
              <Link to="/" className="logo">
                lamastore
              </Link>
            </li>
            {categories.map((category) => {
              return (
                <li key={category}>
                  <Link to={`products/${category}`}>{category}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="page-list">
            <li>
              {currentUser ? (
                <Link to="/profile">
                  <PersonOutlineIcon className="icon" />
                </Link>
              ) : (
                <Link to="/authentication">
                  <PersonOutlineIcon className="icon" />
                </Link>
              )}
            </li>
            <li>
              <button type="button" onClick={() => setShowCart(!showCart)}>
                <ShoppingCartOutlinedIcon className="icon" />
                <span>0</span>
              </button>
            </li>
          </ul>
        </div>
        {showCart && <CartModal />}
      </div>
    </Wrapper>
  );
};

export default Navbar;
