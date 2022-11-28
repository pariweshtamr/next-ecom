import styled from "styled-components"

export const LoginFormStyles = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  opacity: 87%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .login {
    width: 75%;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
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
        flex-direction: column;
        position: relative;

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

          &:focus {
            border: 1px solid #000;
          }

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

      .btn {
        padding: 1.2rem;
        border-radius: 50px;
        border: none;
        outline: none;
        background: var(--orange);
        color: #fff;
        transition: all 0.5s ease;
        cursor: pointer;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;

        span {
          font-size: 1rem;
        }
        &:hover {
          transition: all 0.5s ease;
          gap: 1rem;
        }
      }
    }
  }

  .or {
    margin: 2rem 0;
    text-align: center;
  }

  .google-btn {
    padding: 1.2rem;
    border-radius: 50px;
    border: none;
    outline: none;
    transition: all 0.5s ease;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s ease;
    }
  }

  .reg-btn {
    text-align: center;
    margin: 1rem 0;
    span {
      color: var(--orange);
      text-decoration: underline;
    }
  }
`
