import styled from "styled-components"

export const ProductsCardStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .img-product {
    transform: rotate(25deg);
    width: 10rem;
    height: auto;
  }

  .left-s {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > :nth-child(2) {
      font-size: 2rem;
      font-weight: bold;
    }
    > :nth-child(3) {
      font-size: 0.8rem;
      border: 1px solid var(--black);
      width: max-content;
      border-radius: 15px;
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        background: linear-gradient(#b91372, #6b0f1a);
        border: 1px solid #b91372;
        color: #fff;
      }
    }

    .name {
      display: flex;
      flex-direction: column;

      &:nth-child(1) {
        font-size: 1.4rem;
        font-weight: 600;
      }
      > :nth-child(2) {
        font-size: 0.8rem;
        font-weight: 600;
      }
    }
  }
`
