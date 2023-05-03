import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  .img-container {
    height: 90vh;
    position: relative;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.6s linear;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(0);
  }

  .img-prev {
    transform: translateX(-100%);
    visibility: hidden;
  }

  .img-next {
    transform: translateX(100%);
    visibility: hidden;
  }

  .btn-container {
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);
  }

  button {
    outline: none;
    border: 2px solid #999;
    padding: 1rem;
    color: #111;
  }

  button:first-of-type {
    margin-right: 1rem;
  }

  svg {
    font-size: 3.5rem;
  }
`;

export default Wrapper;
