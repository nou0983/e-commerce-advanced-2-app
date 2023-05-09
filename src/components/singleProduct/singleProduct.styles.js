import styled from "styled-components";

const Wrapper = styled.div`
  flex-basis: 48%;

  .price {
    margin: 3rem 0;
    font-size: 2.5rem;
    color: #2879fe;
  }

  .input-container {
    margin: 2rem 0;
    display: flex;

    button {
      padding: 2rem;
      text-align: center;
      background-color: #ddd;
      display: inline-block;    
    }
  }

  input {
    border: none;
    text-align: center;
    width: 6rem;
    font-size: 1.9rem;
  }

  button {
    border: none;
  }

  .btn-add {
    padding: 1rem 5rem;
    color: #fff;
    background-color: #2879fe;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    margin-bottom: 2rem;

    svg {
      font-size: 2.2rem;
      margin-right: 2rem;
    }
  }

  h4 {
    font-weight: 400;
    text-transform: capitalize;
    color: #999;
  }

  h4:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

export default Wrapper;
