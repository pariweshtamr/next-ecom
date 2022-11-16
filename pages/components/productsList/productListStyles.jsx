import styled from "styled-components"

export const ProductListStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  .products-list {
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    justify-content: center;
    width: 100%;

    .no-prods {
      width: 100%;
      text-align: center;
    }
  }
`
