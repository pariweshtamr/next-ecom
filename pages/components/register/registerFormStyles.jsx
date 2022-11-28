import styled from "styled-components"

export const RegisterFormStyles = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
  opacity: 87%;

  .form-container {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: 0 auto;
    .app-logo {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      img {
        height: 3rem;
        width: 3rem;
      }

      span {
        font-size: 1.5rem;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .form-group {
        display: flex;
        gap: 1rem;
        width: 100%;
      }
      .form-group-content {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;

        label {
          font-size: 1rem;
          color: var(--orange);
          border-radius: 5px;
          padding: 10px;
        }

        input {
          padding: 0.8rem 1rem;
          border-radius: none;
          outline: none;
          border: 1px solid #dbd4d4;
          background: rgba(255, 255, 255, 0.87);

          ::placeholder {
            color: #9e9e9e;
          }
        }
      }

      .form-text {
        margin: 1rem 0;
        font-size: 0.9rem;
        span {
          text-decoration: underline;
        }
      }

      button {
        padding: 1.2rem;
        border-radius: 50px;
        border: none;
        outline: none;
        background: var(--orange);
        color: #fff;
        cursor: pointer;
        transition: 0.5s all ease;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;

        span {
          font-size: 1rem;
        }

        &:hover {
          transition: 0.5s all ease;
          gap: 1rem;
        }
      }
    }
  }

  .log-btn {
    text-align: center;
    margin: 1rem 0;
    span {
      color: var(--orange);
      text-decoration: underline;
    }
  }
`
