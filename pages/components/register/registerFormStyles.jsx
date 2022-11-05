import styled from "styled-components"

export const RegisterFormStyles = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem 0;
  opacity: 87%;

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 28%;
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
          color: #b91372;
          border-radius: 5px;
          padding: 10px;
        }

        input {
          padding: 1rem;
          border-radius: 8px;
          outline: none;
          border: none;
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
        background: linear-gradient(#b91372, #6b0f1a);
        color: #fff;
        cursor: pointer;
        transition: 0.5s all ease;

        &:hover {
          transform: scale(1.1);
          transition: 0.5s all ease;
        }
      }
    }
  }
`
