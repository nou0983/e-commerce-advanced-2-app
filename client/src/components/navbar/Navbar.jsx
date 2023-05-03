import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Wrapper from "./navbar.styles";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-container">
        <div className="nav-header">
          <ul className="product-list">
            <li>
              <Link to="/products/1">men</Link>
            </li>
            <li>
              <Link to="/products/1">women</Link>
            </li>
            <li>
              <Link to="/products/1">children</Link>
            </li>
            <li>
              <Link to="/products/1">accessories</Link>
            </li>
          </ul>
          <Link to="/" className="logo">
            lamastore
          </Link>
          <ul className="page-list">
            <li>
              <Link to="/products/1">home</Link>
            </li>
            <li>
              <Link to="/products/1">about</Link>
            </li>
            <li>
              <Link to="/products/1">contact</Link>
            </li>
            <li>
              <Link to="/products/1">stores</Link>
            </li>
            <li>
              <Link to="/products/1">
                <PersonOutlineIcon className="icon" />
              </Link>
            </li>
            <li>
              <button type="button">
                <ShoppingCartOutlinedIcon className="icon" />
                <span>0</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
