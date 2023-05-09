import styled from "styled-components";

const Wrapper = styled.section`
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }

  h1,
  h2,
  h3 {
    text-transform: capitalize;
  }

  .container {
    width: 80%;
    max-width: 1800px;
    margin: auto;
  }

  .container-large {
    width: 90%;
    max-width: 2500px;
    margin: 3rem auto;
  }

  .heading-primary {
    font-size: 3.2rem;
  }

  .heading-secondary {
    font-size: 3rem;
  }

  .heading-tertiary {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #555;
  }
`;

export default Wrapper;
