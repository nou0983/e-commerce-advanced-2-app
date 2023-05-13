import styled from "styled-components";

const Wrapper = styled.section`
  height: 60vh;

  .inner-container {
    width: 30%;
    margin: 5rem auto 0;
  }

  button {
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    color: inherit;
  }

  .btn-container {
    margin-bottom: 2rem;

    button {
      width: 50%;
      border: 1px solid #eee;
      padding: 1.5rem;
    }

    .btn-active {
      border-bottom-color: #2879fe;
      color: #2879fe;
    }
  }

  .heading-tertiary {
    margin-bottom: 0.5rem;
    text-transform: none;
  }

  p {
    margin-bottom: 2rem;
  }
`;

export default Wrapper;
