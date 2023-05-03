import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10rem 0;

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
    justify-content: center;
    gap: 3%;
  }
`;


export default Wrapper;