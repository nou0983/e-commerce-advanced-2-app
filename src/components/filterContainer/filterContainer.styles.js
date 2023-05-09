import styled from "styled-components";

const Wrapper = styled.aside`
  position: sticky;
  top: 50px;
  height: 100%;

  .sub-container {
    margin-bottom: 2rem;
  }

  h2.heading-secondary {
    font-size: 2.2rem;
  }

  .form-row {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  label {
    text-transform: capitalize;
  }
`;

export default Wrapper;
