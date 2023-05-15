import styled from "styled-components";

const Wrapper = styled.div`
  text-transform: capitalize;

  .header {
    display: flex;
    border-bottom: 1px solid #ccc;
    text-align: center;
    padding-bottom: 1.5rem;

    h5 {
      flex: 1;
      font-size: 1.8rem;
    }
  }

  ul {
    padding: 2rem 0;
  }

  .empty-text {
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
  }

  .btn-container {
    border-top: 1px solid #ccc;
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;

    button.btn {
      border: none;
      font-size: 1.6rem;
      background-color: #bb2525;
    }
  }
`;

export default Wrapper;
