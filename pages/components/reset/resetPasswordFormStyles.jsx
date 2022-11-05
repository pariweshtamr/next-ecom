import styled from "styled-components"

export const ResetPasswordFormStyles = styled.div`
  width: 100vw;
  height: 100vh;

  .reset {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 4rem;

    .reset-img {
      width: 30%;
      height: auto;
    }

    form {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .form-group {
        width: 100%;
        display: flex;
        flex-direction: column;

        input {
          padding: 1rem;
        }
      }

      .reset-btn {
        padding: 1.2rem;
        border-radius: 50px;
        width: 100%;
        border: none;
        outline: none;
        background: linear-gradient(#b91372, #6b0f1a);
        color: #fff;
        transition: all 0.5s ease;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
          transition: all 0.5s ease;
        }
      }

      .action-btns {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
  }
`
