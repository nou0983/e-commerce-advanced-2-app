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
    border: none;
  }

  .container {
    width: 80%;
    max-width: 1500px;
    margin: auto;
  }

  .heading-secondary {
    text-transform: capitalize;
    font-size: 3rem;
  }

  .heading-tertiary {
    text-transform: capitalize;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #555;
  }
`;

export default Wrapper;
