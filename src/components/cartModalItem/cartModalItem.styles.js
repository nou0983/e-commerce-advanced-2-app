import styled from "styled-components";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;  
  margin-bottom: 1rem;

  img {
    object-fit: cover;
    width: 7rem;
    height: 9rem;
  }

  h5 {
    font-weight: 400;
    font-size: 1.6rem;
  }
`

export default Wrapper;