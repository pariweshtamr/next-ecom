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
      width: 40%;
      height: auto;
    }

    form {
      width: 26%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      box-shadow: 0px 1px 2px 0px rgba(185, 19, 114, 1),
        1px 2px 4px 0px rgba(185, 19, 114, 1),
        2px 4px 8px 0px rgba(185, 19, 114, 1),
        2px 4px 16px 0px rgba(185, 19, 114, 1);
      padding: 2rem;
      border-radius: 10px;
      .form-title {
        margin-bottom: -1.8rem;
        h3 {
          font-size: 2rem;
          letter-spacing: 2px;
          font-weight: 500;
        }
      }
      .form-group {
        width: 100%;
        display: flex;
        flex-direction: column;

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
        font-size: 1rem;
        &:hover {
          transition: all 0.5s ease;
        }
      }

      .action-btns {
        display: flex;
        justify-content: space-between;
        width: 100%;
        span {
          &:hover {
            cursor: pointer;
            color: #b91372;
          }
        }
      }
    }
  }
`
