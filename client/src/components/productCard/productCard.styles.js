import styled from "styled-components";

const Wrapper = styled.li`
  flex-basis: 20%;
  letter-spacing: 1px;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 45rem;
  }

  h4 {
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 1.8rem;
  }

  .old-price {
    color: #888;
    text-decoration: line-through;
    margin-right: 1rem;
  }

  .new-tag {
    letter-spacing: 0;
    text-transform: capitalize;
    display: inline-block;
    background-color: #fff;
    color: #2879fe;
    font-size: 1.4rem;
    position: absolute;
    top: 2%;
    left: 3%;
    padding: 0.5rem;
  }
`;

export default Wrapper;
