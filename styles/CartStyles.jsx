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
      text-decoration: underline;
    }

    .cart-top {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;
      padding: 2rem 0;

      @media screen and (max-width: 600px) {
        padding: 5px;
        margin: 20px 0;
        justify-content: center;
      }

      .cart-top-btn {
        padding: 1rem 1.5rem;
        font-weight: 600;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.87);
        @media screen and (max-width: 600px) {
          padding: 5px;
          font-size: 13px;
        }
      }

      .cart-top-texts {
        display: flex;
      }
    }

    .cart-bottom {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 600px) {
        flex-direction: column;
      }
      @media screen and (max-width: 1024px) {
        flex-direction: column;
      }

      .cart-product-info {
        flex: 3;
        margin-right: 1rem;

        @media screen and (max-width: 600px) {
          margin-bottom: 40px;
          margin-right: 0;

          display: flex;
          flex-direction: column;

          justify-content: center;
          align-items: center;
        }

        .table {
          thead {
            background: #000;
            color: #fff;

            tr {
              th {
                padding: 1.5rem 0;
              }
            }
          }

          tbody {
            tr {
              td {
                padding: 3rem 0;

                .cart-actions {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: inherit;
                  .remove-btn {
                    background: transparent;
                    border: 1px solid gray;
                    padding: 0.5rem;
                    color: var(--black);
                  }
                }

                .product-name {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }

              .product-img {
                img {
                  width: 100px;
                  height: auto;
                  @media screen and (max-width: 600px) {
                    width: 120px;
                    height: 120px;
                  }
                }
              }

              .product-price,
              .product-total {
                font-weight: 600;
              }

              .product-qty-container {
                div {
                  border: 1px solid gray;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 0.5rem;

                  svg {
                    font-size: 1rem;
                    &:hover {
                      cursor: pointer;
                    }
                  }

                  .product-qty {
                    border: none;
                  }
                }
              }
            }
          }
        }

        .clear-cart-btn {
          width: 200px;
          padding: 1.2rem;
          background: var(--orange);
          color: #fff;
          border: none;
          border-radius: 50px;
          letter-spacing: 1px;

          @media screen and (max-width: 600px) {
            padding: 10px;
            font-size: 13px;
            width: 150px;
          }
        }
      }

      .cart-summary {
        flex: 1;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 1.5rem;
        height: max-content;
        opacity: 0.87;
        @media screen and (max-width: 1024px) {
          margin-top: 3rem;
        }

        .summary-title {
          font-weight: 300;
          display: flex;
          justify-content: center;
        }

        .summary-item {
          margin: 30px 0;
          display: flex;
          justify-content: space-between;
          font-weight: 500;
          font-size: 1rem;

          .summary-item-text {
            font-weight: 500;
          }
        }

        .cart-summary-btn {
          width: 100%;
          padding: 1.2rem;
          background: var(--orange);
          color: #fff;
          border: none;
          border-radius: 50px;
          letter-spacing: 1px;
          @media screen and (max-width: 600px) {
            padding: 10px;
            font-size: 13px;
            width: 150px;
          }
        }
      }
    }
  }
`
