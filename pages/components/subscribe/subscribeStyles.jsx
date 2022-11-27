import styled from "styled-components"

export const SubscribeStyles = styled.section`
  h2 {
    font-size: 40px;
    font-weight: 600;
    line-height: 1.5;

    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
  .subscribe-form {
    width: 35%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
    .form-group {
      position: relative;
      border: 1px solid black;
      display: flex;

      input {
        background: transparent;
        border: 1px solid transparent;
        color: black;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 300;
        letter-spacing: 3px;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        -ms-border-radius: 30px;
        border-radius: 30px;
        padding: 1rem;
      }

      .submit {
        border-left: 1px solid black;
        color: #fff;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        -ms-border-radius: 0;
        border-radius: 0;
        font-size: 12px;
        background: #000;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`
