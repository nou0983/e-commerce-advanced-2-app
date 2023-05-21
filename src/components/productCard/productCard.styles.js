import styled from "styled-components";

const Wrapper = styled.li`
  flex-basis: 23%;
  letter-spacing: 1px;

  .img-container {
    position: relative;
    height: 45rem;
  }

  .img-container:hover img:first-of-type {
    z-index: -1;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  img:first-of-type {
    z-index: 1;
  }

  h5 {
    margin-top: 1rem;
    font-size: 1.8rem;
    display: flex;
    justify-content: space-between;
  }

  .new-tag {
    letter-spacing: 0;
    text-transform: capitalize;
    display: inline-block;
    background-color: #fff;
    color: #008080;
    font-size: 1.4rem;
    position: absolute;
    top: 2%;
    left: 3%;
    padding: 0.5rem;
    z-index: 2;
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
    flex-basis: 32%;
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {
    flex-basis: 48%;
  }
`;

export default Wrapper;
