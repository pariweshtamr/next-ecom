import styled from "styled-components"

export const ContactStyles = styled.div`
  background: #f8f9fa;
  padding: 4rem 0;
  .top {
    padding: 0 4rem;

    .contacts {
      display: flex;
      justify-content: center;
      gap: 2rem;
      padding-top: 4rem;

      .contact-item {
        background: #fff;
        padding: 2rem 2rem 4rem 2rem;

        h6,
        span {
          letter-spacing: 2px;
        }

        h6 {
          span {
            font-weight: 300;
          }
        }
      }
    }
  }

  .bottom {
    padding: 2rem 4rem;

    .map {
      padding: 2rem;
    }
    .form-col {
      padding: 2rem;
      form {
        background: #fff;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        padding: 0 4rem;

        input,
        textarea {
          width: 100%;
          padding: 0.8rem;
          border-radius: none;
          margin: 0 auto;
          outline: none;
          border: 1px solid #dbd4d4;
        }

        input:focus,
        textarea:focus {
          border: 1px solid var(--black);
        }

        button {
          width: max-content;
          border: 1px solid #fff;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          background: var(--orange);
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;

          &:hover {
            border: 1px solid var(--orange);
            background: #fff;
            color: var(--orange);
            transition: all 0.3s ease;
          }
        }
      }
    }
  }
`
