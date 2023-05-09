import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0 1rem;

  .col {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .col-large {
    flex: 2;
  }

  .col-large div:first-of-type,
  .col-large div:nth-of-type(2) {
    flex-basis: calc((100% - 1rem) / 2);
  }
`;

export default Wrapper;
