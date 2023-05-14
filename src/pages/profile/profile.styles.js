import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 60vh;
  padding-top: 4rem;

  p::first-letter {
    text-transform: uppercase;
  }

  p:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  .btn-container {
    margin-top: 3rem; 
    width: 20%;
    display: flex;
    justify-content: space-between;
  }

  button {
    border: none;
  }
`;

export default Wrapper;
