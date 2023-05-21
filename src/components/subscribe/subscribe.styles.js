import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #2879fe;
  padding: 2rem 0;
  color: #fff;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
  }

  p,
  button {
    text-transform: uppercase;
  }

  p {
    font-size: 2rem;
  }

  input,
  button {
    padding: 1rem 1.5rem;
    border: none;
  }

  input {
    min-width: 23rem;
    width: 13vw;
    border-radius: 3px 0 0 3px;
  }

  button[type="submit"] {
    background-color: #333;
    color: inherit;
    border-radius: 0 3px 3px 0;
  }

  li {
    display: inline-block;
  }

  li:not(:last-of-type) {
    margin-right: 1rem;
  }

  svg {
    font-size: 3rem;
  }

  /* *************************************** */
  /* Media Style */
  /* *************************************** */
  /* Default work done at 2560px */

  /* Extra Large 1729px ~ 1920px */
  @media only screen and (max-width: 1920px) {
  }

  /* Large laptop to Desktop: 1324px ~ 1728px */
  @media only screen and (max-width: 1728px) {
  }

  /* Large Tablet to Laptop: 848px ~ 1323px */
  @media only screen and (max-width: 1323px) {
  }

  /* Large Phone to Tablet: 403px ~ 847px */
  @media only screen and (max-width: 847px) {
    form {
      flex-direction: column;
      gap: 2rem;
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
  }
`;

export default Wrapper;
