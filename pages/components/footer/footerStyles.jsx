import styled from "styled-components"

export const FooterStyles = styled.footer`
  margin-top: 5rem;
  width: 100%;
  padding-bottom: 1rem;
  color: #fff;
  opacity: 87%;

  hr {
    width: 100%;
    height: 1px;
    border: none;
    background: #fff;
    opacity: 87%;
  }

  .footer-container {
    display: flex;
    width: 100%;
    margin-top: 2rem;

    justify-content: space-around;
    .footer-logo {
      display: flex;
      align-items: flex-start;
      gap: 1rem;

      img {
        width: 2.5rem;
        height: 2.5rem;
      }

      span {
        font-weight: 600;
        font-size: 1rem;
      }
    }

    .footer-block {
      max-width: 12rem;
      .footer-details {
        display: flex;
        flex-direction: column;
        width: inherit;
        font-size: 0.7rem;
        font-style: italic;
        gap: 1rem;
        > :nth-child(1) {
          font-weight: 500;
          font-style: normal;
          font-size: 1.2rem;
        }

        .icon-line {
          display: flex;
          gap: 1rem;
          align-items: center;

          .icon {
            font-size: 1.5rem;
          }
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .footer-end {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-size: 0.65rem;
    margin-top: 2rem;
  }
`
