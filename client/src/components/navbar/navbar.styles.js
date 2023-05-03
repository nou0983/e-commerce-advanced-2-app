import styled from "styled-components";

const Wrapper = styled.nav`
  padding: 2rem 0;

  .nav-container {
    width: 90%;
    max-width: 1800px;
    margin: auto;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  li {
    text-transform: capitalize;
    font-size: 1.8rem;
  }

  .logo {
    text-transform: uppercase;
    font-size: 3rem;
  }

  .icon {
    font-size: 3rem;
    color: #777;
  }

  button {
    position: relative;
  }

  span {
    position: absolute;
    top: -30%;
    right: -30%;
    display: inline-block;
    border-radius: 100%;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.7rem;
    text-align: center;
    background-color: #2879fe; 
    line-height: 2.4rem;
    color: #fff;
  }
`;

export default Wrapper;
