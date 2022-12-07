import styled from "styled-components"

export const NavbarStyles = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  .nav-container {
    padding: 0 4rem;

    @media screen and (max-width: 992px) {
      padding: 0 2rem;
    }
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

  .nav-item {
    display: flex;
    gap: 1rem;
    font-size: 0.7rem;
    letter-spacing: 2px;
    align-items: center;

    .auth-section {
      color: var(--orange);
      display: flex;
      gap: 1rem;
    }
  }

  .dropdown-item {
    cursor: pointer;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`
