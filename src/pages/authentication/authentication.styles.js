import styled from "styled-components";

const Wrapper = styled.section`
  height: 60vh;

  .inner-container {
    width: 30%;
    margin: 5rem auto 0;
  }

  button {
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    color: inherit;
  }

  .btn-container {
    margin-bottom: 2rem;

    button {
      width: 50%;
      border: 1px solid #eee;
      padding: 1.5rem;
    }

    .btn-active {
      border-bottom-color: #2879fe;
      color: #2879fe;
    }
  }

  .heading-tertiary {
    margin-bottom: 0.5rem;
    text-transform: none;
  }

  p {
    margin-bottom: 2rem;
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
    .inner-container {
      width: 31%;
    }
  }

  /* Large Tablet to Laptop: 848px ~ 1323px */
  @media only screen and (max-width: 1323px) {
    .inner-container {
      width: 48%;
    }
  }

  /* Large Phone to Tablet: 403px ~ 847px */
  @media only screen and (max-width: 847px) {
    .inner-container {
      width: 65%;
    }

    .btn-inner-container {
      flex-direction: column;
      gap: 1rem;
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
    .inner-container {     
      width: 90%;
    }
  }
`;

export default Wrapper;
