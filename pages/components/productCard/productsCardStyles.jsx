import styled from "styled-components"

export const ProductsCardStyles = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
      font-size: 1rem;
      color: gray;
    }

    .text-bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
`
