import styled from "styled-components"

export const ProductPageStyles = styled.div`
  width: 100vw;

  .back-link {
    margin: 2rem;
    color: var(--orange);
    &:hover {
      color: var(--black);
    }
  }

  .product-wrapper {
    padding: 4rem 2rem;
    display: flex;
    flex-direction: row reverse;
    justify-content: space-between;
    align-items: flex-start;
    overflow: hidden;
    width: 100%;
    gap: 4rem;

    .info-container {
      flex: 1;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .prod-title {
        display: flex;
        gap: 2rem;
        align-items: center;

        span {
          font-weight: 200;
          font-size: 1.2rem;
        }
      }

      .prod-desc {
        line-height: 1.8;
        color: gray;
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
          font-size: 1.1rem;
          padding: 1rem 2rem;
          border-radius: 100px;
          background: var(--black);
          border: none;
          outline: none;
          color: #fff;
          margin-top: 1rem;
          transition: all 0.5s ease;

          &:hover {
            cursor: pointer;
            background: var(--orange);
            transition: all 0.5s ease;
            color: var(--black);
          }
        }
      }

      .prod-size {
        padding: 0.6rem;
        width: max-content;
      }
    }

    .img-container {
      flex: 1;
      width: 100%;
      margin: 0 auto;
      img {
        width: 100%;
        /* transform: rotate(35deg); */
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
