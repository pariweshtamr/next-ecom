import styled from "styled-components"

export const ShopStyles = styled.div`
  width: 100%;
  margin: 4rem 0;

  .products-list-container {
    padding: 0 2em;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .filter-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      div {
        display: flex;
        align-items: center;
        gap: 1rem;
        h5 {
          font-weight: 400;
          letter-spacing: 1px;
          color: var(--black);
        }

        select {
          width: 7rem;
          outline: none;
          border: 1px solid var(--black);
          padding: 0.5rem 0.5rem;
          border-radius: 10px;
          cursor: pointer;
          background: transparent;
          color: var(--black);

          &:focus {
            outline: none;
          }
        }
      }

      .collection-search {
        width: 20%;
        outline: none;
        border: 1px solid var(--black);
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
  }
`
