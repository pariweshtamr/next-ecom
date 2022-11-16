import Link from "next/link"
import styled from "styled-components"

export const ProductItemContainer = styled.div`
  /* background: rgba(255, 255, 255, 0.87); */
  /* box-shadow: 0px 20px 24px 3px rgba(25, 135, 84, 0.42); */

  @media screen and (max-width: 600px) {
    padding: 0;
    margin: 10px 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 15px;
    margin: 0;
  }

  .product-item {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 1rem;
    transition: all 0.5s ease-in-out;
    border-radius: 20px;

    &:hover {
      .product-img {
        img {
          transform: scale(1.2);
          transition: all 0.5s ease-in-out;
        }
      }
    }

    .product-img {
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem;

      img {
        transition: all 0.5s ease-in-out;
        width: 16rem;
        height: auto;

        @media screen and (max-width: 600px) {
          padding: 0 10px;
        }
      }
    }

    .product-info {
      font-size: 1rem;
      margin-bottom: 1rem;

      @media screen and (max-width: 992px) {
        font-size: 0.9rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 0.8rem;
      }
      h2 {
        opacity: 0.87;
        font-weight: 300;
        letter-spacing: 1px;
        margin-bottom: -3px;
      }
      span {
        opacity: 0.87;
        font-weight: 700;
        letter-spacing: 1px;
      }
    }

    .product-card-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .price {
        font-size: 1.8rem;
        font-weight: 500;
      }

      > :nth-child(2) {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          padding: 5px;
          background: var(--main);
          border-radius: 50px;
          font-size: 2.2rem;
          transition: all 0.5s ease-in-out;

          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }

          &:hover {
            background: rgba(255, 255, 255, 0.87);
            color: var(--main);
            transition: all 0.5s ease-in-out;
          }
        }
      }
    }
  }
`
