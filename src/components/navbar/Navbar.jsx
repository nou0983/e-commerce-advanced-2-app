import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { useProductsContext } from "../../contexts/ProductsContext";
import CartModal from "../cartModal/CartModal";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Wrapper from "./navbar.styles";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { currentUser } = useUserContext();
  const { products, isCartOpen, toggleCart, totalQuantity } =
    useProductsContext();
  const categories = Object.keys(products);

  return (
    <Wrapper>
      <div className="nav-container">
        <div className="nav-header">
          <div className="nav-sub-header">
            <Link to="/" className="logo" onClick={() => setShowNav(false)}>
              lamastore
            </Link>
            <ul className={`product-list ${showNav ? "nav-show" : ""}`}>
              {categories.map((category) => {
                return (
                  <li key={category} onClick={() => setShowNav(false)}>
                    <Link to={`products/${category}`}>{category}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="page-list">
            <li className="nav-btn-container">
              <button
                type="button"
                className="nav-btn"
                onClick={() => setShowNav(!showNav)}
              >
                {showNav ? <CloseIcon /> : <MenuIcon />}
              </button>
            </li>
            <li onClick={() => setShowNav(false)}>
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
              <button type="button" onClick={() => toggleCart(!isCartOpen)}>
                <ShoppingCartOutlinedIcon className="icon" />
                <span>{totalQuantity}</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="modal-container">{isCartOpen && <CartModal />}</div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
