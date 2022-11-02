import styled from "styled-components"

export const LoginFormStyles = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem 0;

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 26%;
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
      gap: 2rem;
      .form-group {
        display: flex;
        flex-direction: column;
        position: relative;

        label {
          font-size: 0.7rem;
          position: absolute;
          top: -0.7rem;
          left: 1rem;
          color: #b91372;
          background: #fff;
          border-radius: 5px;
          padding: 0.2rem 0.4rem;
        }

        input {
          padding: 1rem;
          border-radius: 8px;
          outline: none;
          border: none;

          ::placeholder {
            color: #c4c4c4;
          }
        }
      }
    }
  }
`
