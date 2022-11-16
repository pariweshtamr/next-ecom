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

  .product-wrapper {
    padding: 4rem 2rem 4rem 8rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;

    .info-container {
      flex: 1.6;
      padding: 0 18rem 0 0;

      .prod-title {
        display: flex;
        gap: 2rem;
        align-items: center;

        span {
          font-weight: 200;
          font-size: 1.2rem;
        }
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

  .product-page-bottom {
    padding: 2rem;

    .tab-wrapper {
      display: flex;
      align-items: center;
      gap: 2rem;

      h3 {
        font-weight: 500;
        cursor: pointer;
      }

      .active-tab {
        color: var(--main);
        font-weight: 600;
      }

      .tab-content {
        line-height: 30px;
      }
    }

    .product-review {
      .review-wrapper {
        ul {
          list-style: none;
          padding: 0;

          li {
            span {
              color: #f0c040;
            }

            h4 {
              margin-bottom: -2px;
            }
          }
        }

        .review-form {
          width: 50%;
          margin: auto;
          margin-top: 8rem;

          h2 {
            font-size: 1.8rem;
            font-weight: 500;
            margin-bottom: 30px;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            .form-group {
              input,
              textarea {
                max-width: 100%;
                width: 100%;
                border-radius: 5px;
                padding: 15px 20px;
                outline: none;
                border: none;
              }
              textarea {
                min-width: 100%;
              }
            }
            .review-bttn {
              border: none;
              outline: none;
              width: max-content;
              padding: 15px 40px;
              border-radius: 50px;
              background: var(--btn-bg);
              color: #fff;
              font-size: 1rem;
              text-transform: uppercase;
              box-shadow: 0px 15px 24px 3px rgba(185, 19, 114, 0.3);
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
`
