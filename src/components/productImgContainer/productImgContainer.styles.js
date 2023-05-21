import styled from "styled-components";

const Wrapper = styled.div`
  flex-basis: 48%;
  display: flex;
  justify-content: space-between;

  header {
    flex-basis: 15%;

    img {
      cursor: pointer;
      height: 10rem;
    }

    img:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }

  div {
    flex-basis: 80%;
  }

  img {
    object-fit: cover;
    width: 100%;
  }

  .main-image {
    height: 90rem;
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
    .main-image {
      height: 70rem;
    }
  }

  /* Large Phone to Tablet: 403px ~ 847px */
  @media only screen and (max-width: 847px) {
    .main-image {
      height: 50rem;
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
  }
`;

export default Wrapper;
