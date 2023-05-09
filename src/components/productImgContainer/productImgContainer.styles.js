import styled from "styled-components";

const Wrapper = styled.div`
  flex-basis: 48%;
  display: flex;
  justify-content: space-between;

  header {
    flex-basis: 15%;

    img {
      cursor: pointer;
    }

    img:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }

  div {
    flex-basis: 80%;
  }

  img {
    object-fit: cover;
    width: 100%;
  }

  .main-image {
    height: 90rem;
  }
`;

export default Wrapper;
