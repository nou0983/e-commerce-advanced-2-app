import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: auto;
  border: 1px solid #ccc;
  width: 40%;
  margin-top: 3rem;
  padding: 2.5rem;
  border-radius: 3px;

  p {
    text-transform: capitalize;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  span {
    display: inline-block;
    width: 15rem;
  }

  h3.heading-tertiary {
    border-top: 1px solid #ccc;
    padding-top: 3rem;
    margin-bottom: 3rem;
  }

  .login-text {
    font-size: 1.5rem;
    text-transform: none;
  }

  a {
    display: inline-block;
  }
`;

export default Wrapper;
