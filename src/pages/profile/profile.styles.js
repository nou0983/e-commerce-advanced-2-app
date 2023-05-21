import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 60vh;

  .profile-container {
    padding: 4rem;
    border: 1px solid #ccc;
    width: 30%;
    margin: 4rem auto 0;
    border-radius: 3px;
  }

  p::first-letter {
    text-transform: uppercase;
  }

  p:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  .btn-container {
    margin-top: 3rem;
    display: flex;
    gap: 2rem;
  }

  button {
    border: none;
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
    .profile-container {
      width: 50%;
    }
  }

  /* Large Phone to Tablet: 403px ~ 847px */
  @media only screen and (max-width: 847px) {
    .profile-container {
      width: 70%;
    }

    .btn-container {
      flex-direction: column;
      gap: 1rem;
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
    .profile-container {
      width: 95%;
    }
  }
`;

export default Wrapper;
