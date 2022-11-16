import styled from "styled-components"

export const CartStyles = styled.div`
  .cart-wrapper {
    padding: 2rem;
    @media screen and (max-width: 600px) {
      padding: 10px;
    }
    @media screen and (max-width: 1024px) {
      min-height: 67vh;
    }

    .cart-title {
      font-weight: 300;
      text-align: center;
    }

    .cart-top {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 0;

      @media screen and (max-width: 600px) {
        padding: 5px;
        margin: 20px 0;
        justify-content: center;
      }

      .cart-top-btn {
        padding: 1rem;
        font-weight: 600;
        cursor: pointer;

        @media screen and (max-width: 600px) {
          padding: 5px;
          font-size: 13px;
        }
      }

      .cart-top-texts {
        display: flex;
      }
    }
  }
`
