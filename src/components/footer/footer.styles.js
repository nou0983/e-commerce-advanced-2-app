import styled from "styled-components";

const Wrapper = styled.footer`
  padding: 10rem 0;
  background-color: #eee;

  .footer-top,
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 1rem;
  }

  li,
  p {
    color: #777;
  }

  li {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  .footer-top > div {
    flex-basis: 22%;
  }

  .footer-bottom {
    margin-top: 4rem;
    align-items: center;
    text-transform: capitalize;
  }

  p {
    display: flex;
    align-items: center;
  }

  .logo {
    font-size: 3rem;
    color: #2879fe;
    font-weight: 900;
    margin-right: 1rem;
  }

  img {
    height: 5.5rem;
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
    .footer-top > div {
      flex-basis: 43%;
    }

    .footer-bottom {
      flex-direction: column;

      img {
        order: -1;
      }
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
    .footer-bottom {
      img {
        height: 4.5rem;
      }
    }
  }
`;

export default Wrapper;
