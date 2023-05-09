import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 40rem;
  position: relative;

  &.row-high {
    height: 81rem;
  }

  &:hover .link {
    background-color: #2879fe;
    color: #fff;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .link {
    padding: 2rem 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
`;

export default Wrapper;
