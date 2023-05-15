import styled from "styled-components";

const Wrapper = styled.nav`
  padding: 2rem 0;

  .nav-container {
    width: 90%;
    max-width: 1800px;
    margin: auto;

    ul {
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    border: none;
  }

  span {
    position: absolute;
    top: -30%;
    right: -30%;
    border-radius: 100%;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.65rem;
    background-color: #2879fe;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Wrapper;
