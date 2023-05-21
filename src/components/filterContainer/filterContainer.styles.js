import styled from "styled-components";

const Wrapper = styled.aside`
  position: sticky;
  top: 50px;
  height: 100%;

  .sub-container {
    margin-bottom: 2rem;
  }

  h2.heading-secondary {
    font-size: 2.2rem;
  }

  .form-row {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  label {
    text-transform: capitalize;
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
    position: relative;
    top: 0;
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
    width: 95%;
  }
`;

export default Wrapper;
