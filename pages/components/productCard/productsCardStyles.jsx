import styled from "styled-components"

export const ProductsCardStyles = styled.div`
  width: 16.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    .top {
      .img-product {
        filter: brightness(60%);
        transition: all 0.5s ease;
      }
      .action-btn {
        display: flex;
        transition: all 0.5s ease;
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 100vw;
    padding: 0;
    margin: 0;
  }

  @media screen and (min-width: 600px) and (max-width: 992px) {
    width: 21rem;
    margin-bottom: 2rem;
  }

  .top {
    position: relative;
    .img-product {
      flex: 2;
      width: 100%;
      height: auto;
      transition: all 0.5s ease;

      @media screen and (min-width: 1801px) {
        width: 14rem;
        height: auto;
      }
    }

    .action-btn {
      position: absolute;
      bottom: 1rem;
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 0.4rem;
      display: none;
      transition: all 0.5s ease;

      button {
        background: #000;
        color: #fff;
        border: none;
        padding: 0.8rem 1rem;
        font-size: 0.8rem;
        width: max-content;
        text-transform: uppercase;
        display: flex;
        align-items: center;

        &:nth-child(2) {
          background: #fff;
          color: #000;
          gap: 0.2rem;

          span {
            font-size: 0.9rem;
          }
        }
      }
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
