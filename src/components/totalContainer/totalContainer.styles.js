import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: auto;
  border: 1px solid #ccc;
  width: 40%;
  margin-top: 3rem;
  padding: 2.5rem;
  border-radius: 3px;

  p {
    text-transform: capitalize;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  span {
    display: inline-block;
    width: 15rem;
  }

  h3.heading-tertiary {
    border-top: 1px solid #ccc;
    padding-top: 3rem;
    margin-bottom: 3rem;
  }

  .login-text {
    font-size: 1.5rem;
    text-transform: none;
  }

  a {
    display: inline-block;
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
    & {
      width: 60%;
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
  }
`;

export default Wrapper;
