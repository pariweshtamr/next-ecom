import Link from "next/link"
import styled from "styled-components"

export const ProductItemContainer = styled.div`
  padding: 1rem;
  margin: 5px;
  width: max-content;
  height: 30rem;
  border-radius: 20px;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.87);
  /* box-shadow: 0px 20px 24px 3px rgba(25, 135, 84, 0.42); */

  &:hover {
    background: #fff;
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    margin: 10px 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 15px;
    margin: 0;
  }
`
export const ProductItemImage = styled.img`
  width: 18rem;
  height: auto;

  @media screen and (max-width: 600px) {
    padding: 0 10px;
  }
`
export const ProductItemInfo = styled.div`
  margin-top: 1rem;
  padding: 0 0.5rem;
  > h2 {
    font-size: 1rem;
    color: #b91372;
  }

  .add-cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .cart-bttn {
      font-size: 1rem;
      border: 1px solid #b91372;
      background: #b91372;
      width: max-content;
      border-radius: 15px;
      padding: 5px 15px;
      cursor: pointer;
      color: #fff;

      &:hover {
        background: linear-gradient(#b91372, #6b0f1a);
        border: 1px solid #b91372;
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 10px;
  }
`
export const ProductItemPrice = styled.div`
  font-size: 2rem;
`
export const ProductLink = styled(Link)`
  text-decoration: none;
  color: teal;

  &:hover {
    color: #000;
  }
`
