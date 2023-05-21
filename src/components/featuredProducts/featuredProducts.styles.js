import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20rem 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
  }

  h2 {
    flex-basis: 30%;
  }

  p {
    flex-basis: 60%;
  }

  .products-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 4rem;
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
    padding: 15rem 0;

    .header {
      display: block;
    }

    h2 {
      margin-bottom: 1rem;
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
    padding: 10rem 0;
  }
`;

export default Wrapper;
