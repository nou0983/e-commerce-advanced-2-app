import styled from "styled-components";

const Wrapper = styled.section`
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }

  h1,
  h2,
  h3 {
    text-transform: capitalize;
  }

  .container {
    width: 80%;
    max-width: 1800px;
    margin: auto;
  }

  .container-large {
    width: 90%;
    max-width: 2000px;
    margin: 3rem auto;
  }

  .heading-primary {
    font-size: 3.2rem;
  }

  .heading-secondary {
    font-size: 3rem;
  }

  .heading-tertiary {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #555;
  }

  .btn {
    border-radius: 2px;
    padding: 1.5rem 3rem;
    background-color: #2879fe;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
  }

  .btn:hover {
    opacity: 0.8;
  }

  .btn:disabled {
    opacity: 0.8;
  }

  .btn-inner-container {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }

  .alert {
    font-size: 1.6rem;
    margin-top: 2rem;
  }

  /* *************************************** */
  /* Media Style */
  /* *************************************** */
  /* Default work done at 2560px */

  /* Extra Large 1729px ~ 1920px */
  @media only screen and (max-width: 1920px) {
    html {
      font-size: 58%;
    }
  }

  /* Large laptop to Desktop: 1324px ~ 1728px */
  @media only screen and (max-width: 1728px) {
    html {
      font-size: 56.5%;
    }

    .container {
      width: 90%;
    }
  }

  /* Large Tablet to Laptop: 848px ~ 1323px */
  @media only screen and (max-width: 1323px) {
  }

  /* Large Phone to Tablet: 403px ~ 847px */
  @media only screen and (max-width: 847px) {
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
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
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
  }
`;

export default Wrapper;
