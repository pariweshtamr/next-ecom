import styled from "styled-components"

export const HeaderStyles = styled.div`
  padding: 1.5rem;
  display: flex;

  .app-logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
    opacity: 87%;

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
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    .header-menu {
      display: flex;
      gap: 1.5rem;
      font-weight: 500;
      list-style: none;
      opacity: 87%;

      > :nth-child(1) {
        &:hover {
          color: #b91372;
          cursor: pointer;
        }
      }

      > :nth-child(2) {
        color: #b91372;
        &:hover {
          color: #fff;
          opacity: 87%;
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
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.87);
  }

  .header-cart {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`
