import styled from "styled-components"

export const ProductsCardStyles = styled.div`
  width: 16.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 600px) {
    width: 100vw;
    padding: 0;
    margin: 0;
  }

  @media screen and (min-width: 600px) and (max-width: 992px) {
    width: 21rem;
    margin-bottom: 2rem;
  }

  .img-product {
    flex: 2;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 1801px) {
      width: 14rem;
      height: auto;
    }
  }

  .text {
    flex: 1;
    background: #fff;

    h3 {
      text-transform: uppercase;
      font-size: 14px;
      color: #000;
      letter-spacing: 1px;
      font-weight: 300;
    }

    .text-bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
`
