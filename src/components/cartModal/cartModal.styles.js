import styled from "styled-components";

const Wrapper = styled.ul`
  z-index: 10;
  position: absolute;
  right: 0;
  top: 3rem;
  padding: 2rem;
  box-shadow: 0 0 4px #ccc;
  background-color: #fff;
  width: 35rem;

  .empty-list {
    text-align: center;
    text-transform: capitalize;
    min-height: 10rem;
    margin-top: 5rem;
  }

  .btn {
    display: inline-block;
    text-align: center;
    width: 100%;
    font-size: 1.4rem;
  }
`;

export default Wrapper;
