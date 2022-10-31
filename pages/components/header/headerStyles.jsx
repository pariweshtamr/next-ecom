import styled from "styled-components"

export const HeaderStyles = styled.div`
  padding: 1.5rem;
  display: flex;

  .app-logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
    span {
      font-weight: 600;
    }
  }

  .header-right {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    .header-menu {
      display: flex;
      gap: 2rem;
      font-weight: 500;
      list-style: none;

      li {
        &:hover {
          color: #fe956f;
          cursor: pointer;
        }
      }
    }
  }

  .header-search {
    width: 15rem;
    outline: none;
    border: none;
    border-radius: 50px;
    padding: 0.5rem;
  }

  .header-cart {
    width: 1.5rem;
    height: 1.5rem;
  }
`
