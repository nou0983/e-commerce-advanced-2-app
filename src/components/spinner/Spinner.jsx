import Wrapper from "./spinner.styles";

const Spinner = ({ size }) => {
  return (
    <Wrapper className="spinner-container">
      <div
        className={`spinner ${size === "large" ? "spinner-large" : ""}`}
      ></div>
    </Wrapper>
  );
};

export default Spinner;
