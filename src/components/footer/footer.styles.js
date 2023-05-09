import styled from "styled-components";

const Wrapper = styled.footer`
  padding: 10rem 0;
  background-color: #eee;

  .footer-top,
  .footer-bottom {
    display: flex;
    justify-content: space-between;
  }

  .footer-last {
    flex-basis: 50%;
    display: flex;
    gap: 3rem;

    p {
      text-align: justify;
    }
  }

  li,
  p {
    color: #777;
  }

  li {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  .footer-bottom {
    margin-top: 4rem;
    align-items: center;
    text-transform: capitalize;
  }

  p {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 3rem;
    color: #2879fe;
    font-weight: 900;
    margin-right: 1rem;
  }

  img {
    height: 5.5rem;
  }
`;

export default Wrapper;
