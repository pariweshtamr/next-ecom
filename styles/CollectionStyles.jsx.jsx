import styled from "styled-components"

export const CollectionStyles = styled.div`
  width: 100%;

  .products-list-container {
    padding: 0 2em;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .filter-container {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;

      div {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 1rem;
        h3 {
          font-weight: 400;
          letter-spacing: 1px;
        }

        select {
          width: max-content;
          height: fit-content;
          display: flex;
          outline: none;
          border: none;
          padding: 0.5rem;
          border-radius: 20px;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }

      .collection-search {
        width: 20%;
        outline: none;
        border: none;
        border-radius: 50px;
        padding: 0.5rem 1rem;
        background: rgba(255, 255, 255, 0.87);
        @media screen and (max-width: 640px) {
          display: none;
        }
        @media screen and (max-width: 856px) {
          display: none;
        }
      }
    }

    .products-list {
      display: flex;
      justify-content: center;
    }
  }
`
