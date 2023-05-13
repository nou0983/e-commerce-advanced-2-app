import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  label {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  input {
    border: none;
    border: 1px solid #aaa;
    padding: 1rem;
    outline: none;
  }

  input::placeholder {
    color: #aaa;
  }

  input:focus {
    border-color: #2879fe;
  }
`;

export default Wrapper;