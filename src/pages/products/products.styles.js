import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;

  article {
    flex: 1;
  }

  .container {
    padding-top: 0;
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
    &.container-large .products-list li {
      flex-basis: 32%;
    }
  }

  /* Large Phone to Tablet: 403px ~ 847px */
  @media only screen and (max-width: 847px) {  
    &.container-large {
      display: block;
      width: 100%;  
    }

    .container .container{
      width: 100%;
    }
  }

  /* Extra small phone to Phone: 0px ~ 402px */
  @media only screen and (max-width: 402px) {  
  }
`;

export default Wrapper;
