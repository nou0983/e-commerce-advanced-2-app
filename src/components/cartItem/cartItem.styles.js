import styled from "styled-components";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;

  h6 {
    flex: 1;
    font-size: 1.6rem;
    font-weight: 400;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 20%;
    height: 8rem;
    object-fit: cover;
    margin-right: 1.5rem;
  }

  .quantity-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    font-size: 2.5rem;
  }

  button {
    border: none;

    svg {
      font-size: 2.5rem;
    }
  }
`;

export default Wrapper;
