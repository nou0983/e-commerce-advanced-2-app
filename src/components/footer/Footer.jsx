import { Link } from "react-router-dom";
import payment from "../../assets/imgs/payment.png";
import Wrapper from "./footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="footer-top">
          <div>
            <h3 className="heading-tertiary">categories</h3>
            <ul>
              <li>
                <Link>women</Link>
              </li>
              <li>
                <Link>men</Link>
              </li>
              <li>
                <Link>shoes</Link>
              </li>
              <li>
                <Link>accessories</Link>
              </li>
              <li>
                <Link>new arrivals</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="heading-tertiary">links</h3>
            <ul>
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>pages</Link>
              </li>
              <li>
                <Link>stores</Link>
              </li>
              <li>
                <Link>compare</Link>
              </li>
              <li>
                <Link>cookies</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="heading-tertiary">about</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              consectetur ullam exercitationem natus, quis maxime officiis
              quibusdam libero itaque porro numquam incidunt aliquam adipisci
              error neque accusantium qui sapiente quisquam!
            </p>
          </div>
          <div>
            <h3 className="heading-tertiary">contact</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo
              quisquam praesentium exercitationem enim aspernatur laudantium
              dolor minima ea, velit non consequuntur corrupti soluta odit et in
              fugiat architecto error.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            <Link to="/" className="logo">
              lamastore
            </Link>
            &copy; copyright 2023. all rights reserved
          </p>

          <img src={payment} alt="Payment options" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
