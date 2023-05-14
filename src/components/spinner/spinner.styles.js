import styled from "styled-components";

const Wrapper = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 100%;
    border: 3px solid #ddd;
    border-top-color: #999;
    animation: loadingIcon 1s linear infinite;
  }

  .spinner-large {
    width: 6rem;
    height: 6rem;
  }

  @keyframes loadingIcon {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Wrapper;
