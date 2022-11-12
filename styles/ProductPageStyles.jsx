import styled from "styled-components"

export const ProductPageStyles = styled.div`
  width: 100%;

  .back-link {
    margin: 2rem;
    color: #b91372;
    &:hover {
      color: #fff;
    }
  }

  .wrapper {
    padding: 4rem 2rem 4rem 8rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;

    .info-container {
      flex: 1.6;
      padding: 0 18rem 0 0;

      .prod-title {
      }
      .action-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .prod-price {
          i {
            font-size: 3.5rem;
            font-weight: 400;
          }
        }

        .cart-bttn {
          font-size: 1.2rem;
          padding: 1rem 2rem;
          border-radius: 100px;
          background: linear-gradient(#b91372, #6b0f1a);
          border: none;
          outline: none;
          color: #fff;
          text-transform: uppercase;
          &:hover {
            cursor: pointer;
            background: linear-gradient(#6b0f1a, #b91372);
          }
        }
      }
    }

    .img-container {
      flex: 1.8;
      img {
        width: 100%;
        transform: rotate(35deg);
      }
    }
  }
`
