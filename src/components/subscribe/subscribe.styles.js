import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #2879fe;
  padding: 2rem 0;
  color: #fff;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
  }

  p,
  button {
    text-transform: uppercase;
  }

  p {
    font-size: 2rem;
  }

  input,
  button {
    padding: 1rem 1.5rem;
    border: none;
  }

  input {
    width: 13vw;   
    border-radius: 3px 0 0 3px;
  }

  button[type="submit"] {
    background-color: #333;
    color: inherit;
    border-radius: 0 3px 3px 0;
  }

  li {
    display: inline-block;
  }

  li:not(:last-of-type) {
    margin-right: 1rem;
  }

  svg {
    font-size: 3rem;
  }
`;

export default Wrapper;
