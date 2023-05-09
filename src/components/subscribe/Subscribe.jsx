import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Wrapper from "./subscribe.styles";

const Subscribe = () => {
  return (
    <Wrapper>
      <form className="container">
        <p>be in touch with us:</p>
        <div>
          <input type="email" name="email" placeholder="Enter your email" />
          <button type="submit">join us</button>
        </div>
        <ul className="social-list">
          <li>
            <a href="#">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </form>
    </Wrapper>
  );
};

export default Subscribe;
