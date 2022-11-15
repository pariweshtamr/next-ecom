import styled from "styled-components"

export const HeaderStyles = styled.div`
  padding: 1.5rem;
  display: flex;
  position: relative;

  @media screen and (max-width: 640px) {
    padding: 1.5rem 0;
  }

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

    @media screen and (max-width: 640px) {
      position: absolute;
      right: -0.5rem;
      z-index: 999;
      background: rgba(255, 255, 255, 0.9);
      color: var(--black);
      border-radius: 50px;
      flex-direction: column;
      padding: 1rem;
    }

    @media screen and (max-width: 856px) {
      gap: 1rem;
    }

    .header-bars {
      display: none;
      @media screen and (max-width: 640px) {
        display: block;
      }
    }
    .header-menu {
      display: flex;
      gap: 1.5rem;
      font-weight: 500;
      list-style: none;
      opacity: 87%;

      @media screen and (max-width: 640px) {
        flex-direction: column;
        margin-left: -2rem;
        display: none;
      }

      > :nth-child(1) {
        &:hover {
          color: #b91372;
          cursor: pointer;
        }
      }

      > :nth-child(2),
      > :nth-child(3) {
        color: #b91372;
        &:hover {
          color: #fff;
          opacity: 87%;
          cursor: pointer;
        }
      }

      .logout-btn {
        color: #b91372;

        &:hover {
          color: #fff;
          opacity: 87%;
          cursor: pointer;
        }
      }
    }
  }

  .header-cart {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`
