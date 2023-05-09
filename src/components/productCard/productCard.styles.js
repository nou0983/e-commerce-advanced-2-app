import styled from "styled-components";

const Wrapper = styled.li`
  flex-basis: 20%;
  letter-spacing: 1px;

  .img-container {
    position: relative;
    height: 45rem;
  }

  .img-container:hover img:first-of-type {
    z-index: -1;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  img:first-of-type {
    z-index: 1;
  }

  h4 {
    margin: 1rem 0;
  }

  h5 {
    font-size: 1.8rem;
  }

  .old-price {
    color: #999;
    text-decoration: line-through;
    margin-right: 1rem;
  }

  .new-tag {
    letter-spacing: 0;
    text-transform: capitalize;
    display: inline-block;
    background-color: #fff;
    color: #008080;
    font-size: 1.4rem;
    position: absolute;
    top: 2%;
    left: 3%;
    padding: 0.5rem;
    z-index: 2;
  }
`;

export default Wrapper;
