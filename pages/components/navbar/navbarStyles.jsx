import styled from "styled-components"

export const NavbarStyles = styled.div`
  .nav-container {
    padding: 0 4rem;
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
  }
`
