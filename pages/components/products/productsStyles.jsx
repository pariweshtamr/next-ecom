import styled from "styled-components"

export const ProductsStyles = styled.div`
  padding: 0 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  img {
    position: absolute;
    width: 8rem;
    left: 30%;
    top: -3rem;
  }

  .products {
    display: grid;
    width: 100%;
    grid-template-columns: 20% auto;

    .menu {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-weight: 500;
      font-size: 1.3rem;

      li {
        &:hover {
          cursor: pointer;
          color: #b91372;
        }
      }
    }

    .list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
      height: 30rem;
      overflow-y: scroll;
      grid-gap: 1rem;
      padding: 0 1rem 0 0;

      .product {
        width: 21rem;
        height: 12rem;
        background: rgba(255, 255, 255, 0.87);
        border-radius: 10px;
        display: flex;
        padding: 1rem;
        overflow: hidden;
        color: var(--black);

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
            width: 9.5rem;
            height: auto;
            top: 0rem;
            left: 9.5rem;
            transform: rotate(0);
          }
        }
      }
    }
  }
`
