import styled from "styled-components"

export const FeaturedProductsStyles = styled.div`
  padding: 0 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;

  @media screen and (max-width: 856px) {
    gap: 1rem;
  }
  @media screen and (max-width: 640px) {
    padding: 0 1rem;
    margin-top: 4rem;
  }

  .title-img {
    position: absolute;
    width: 8rem;
    left: 30%;
    top: -3rem;

    @media screen and (max-width: 856px) {
      display: none;
    }
    @media screen and (max-width: 640px) {
      display: none;
    }
  }

  h1 {
    width: 100%;
    text-align: center;

    @media screen and (max-width: 640px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }

  .products {
    display: grid;
    width: 100%;
    grid-template-columns: 20% auto;
    @media screen and (max-width: 856px) {
      grid-template-columns: none;
      gap: 1rem;
    }

    .menu {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-weight: 500;
      font-size: 1.3rem;

      @media screen and (max-width: 856px) {
        flex-direction: row;
      }

      @media screen and (max-width: 640px) {
        gap: 1rem;
        flex-wrap: wrap;
        width: 100%;
        font-size: 1.2rem;
        justify-content: center;
        padding: 0;
        margin-top: -1rem;
      }

      li {
        &:hover {
          cursor: pointer;
          color: #b91372;
        }
      }
    }

    .list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
      height: 30rem;
      overflow-y: scroll;
      grid-gap: 2rem;
      padding: 0 1rem 0 0;
      @media screen and (min-width: 857px) {
        grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
        overflow-x: hidden;
      }
      @media screen and (max-width: 856px) {
        grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
        overflow-x: hidden;
      }
      @media screen and (max-width: 640px) {
        grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));

        overflow-x: hidden;
      }

      .product {
        width: 25rem;
        height: 14rem;
        background: rgba(255, 255, 255, 0.87);
        border-radius: 10px;
        display: flex;
        padding: 1rem;
        overflow: hidden;
        color: var(--black);
        @media screen and (min-width: 857px) {
          width: 25rem;
          height: 12rem;
        }
        @media screen and (max-width: 856px) {
          width: 20rem;
          height: 11rem;
        }
        @media screen and (max-width: 640px) {
          width: 17rem;
          height: 10rem;
        }

        > div {
          position: relative;

          .left-s {
            .name {
              > :nth-child(1) {
                font-size: 1.2rem;
              }
            }
          }

          .img-product {
            position: absolute;
            width: 12rem;
            height: auto;
            top: 0rem;
            right: 0rem;
            transform: rotate(0);

            @media screen and (max-width: 856px) {
              width: 9rem;
            }
            @media screen and (max-width: 640px) {
              width: 7rem;
            }
          }
        }
      }
    }
  }
`
