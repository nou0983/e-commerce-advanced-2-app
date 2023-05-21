import styled from "styled-components";

const Wrapper = styled.div`
  text-transform: capitalize;

  .header {
    display: flex;
    border-bottom: 1px solid #ccc;
    text-align: center;
    padding-bottom: 1.5rem;

    h5 {
      flex: 1;
      font-size: 1.8rem;
    }
  }

  ul {
    padding: 2rem 0;
  }

  .empty-text {
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
  }

  .btn-container {
    border-top: 1px solid #ccc;
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    text-align: center;

    button.btn {
      border: none;
      font-size: 1.6rem;
      background-color: #bb2525;
    }
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
    .btn-container {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export default Wrapper;
