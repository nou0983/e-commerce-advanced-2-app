import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20rem 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
  }

  h2 {
    flex-basis: 30%;
  }

  p {
    flex-basis: 60%;
  }

  .products-list {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem 2.6%;
  }
`;

export default Wrapper;
