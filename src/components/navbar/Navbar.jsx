import CartModal from "../cartModal/CartModal";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Wrapper from "./navbar.styles";
import { useState } from "react";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <Wrapper>
      <div className="nav-container">
        <div className="nav-header">
          <ul className="product-list">
            <li>
              <Link to="/products/men">men</Link>
            </li>
            <li>
              <Link to="/products/women">women</Link>
            </li>
            <li>
              <Link to="/products/children">children</Link>
            </li>
            <li>
              <Link to="/products/accessories">accessories</Link>
            </li>
          </ul>
          <Link to="/" className="logo">
            lamastore
          </Link>
          <ul className="page-list">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/products/1">about</Link>
            </li>
            <li>
              <Link to="/products/1">contact</Link>
            </li>           
            <li>
              <Link to="/sign-in">
                <PersonOutlineIcon className="icon" />
              </Link>
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
