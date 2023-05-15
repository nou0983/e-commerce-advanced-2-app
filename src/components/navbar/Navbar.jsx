import CartModal from "../cartModal/CartModal";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { useProductsContext } from "../../contexts/ProductsContext";
import Wrapper from "./navbar.styles";

const Navbar = () => {
  const { currentUser } = useUserContext();
  const { products, isCartOpen, toggleCart, totalQuantity } =
    useProductsContext();
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
              <button type="button" onClick={() => toggleCart(!isCartOpen)}>
                <ShoppingCartOutlinedIcon className="icon" />
                <span>{totalQuantity}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </Wrapper>
  );
};

export default Navbar;
