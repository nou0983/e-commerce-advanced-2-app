import styled from "styled-components";

const Wrapper = styled.nav`
  padding: 2rem 0;

  .nav-container {
    width: 90%;
    max-width: 1800px;
    margin: auto;

    .product-list,
    .page-list {
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-sub-header {
    display: flex;
    gap: 3rem;
    align-items: center;
  }

  li {
    text-transform: capitalize;
    font-size: 1.8rem;
  }

  .logo {
    text-transform: uppercase;
    font-size: 3rem;
  }

  .icon {
    font-size: 3rem;
    color: #777;
  }

  button {
    position: relative;
    border: none;
  }

  span {
    position: absolute;
    top: -30%;
    right: -30%;
    border-radius: 100%;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.65rem;
    background-color: #2879fe;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-btn-container {
    display: none;
  }

  .modal-container {
    position: relative;
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
    .nav-container {
      ul.product-list {
        position: absolute;
        top: 5rem;
        left: 0;
        flex-direction: column;
        z-index: 5;
        background-color: #fff;
        width: 100vw;
        padding: 2rem 0;
        visibility: hidden;
      }

      ul.nav-show {
        visibility: visible;
      }
    }

    .nav-btn-container {
      display: inline-block;

      .nav-btn {
        cursor: pointer;
      }

      svg {
        font-size: 3rem;
      }
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
  }
`;

export default Wrapper;
