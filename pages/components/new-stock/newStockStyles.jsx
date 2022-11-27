import styled from "styled-components"

export const NewStockStyles = styled.section`
  .new-container {
    padding: 0 4rem;

    @media screen and (max-width: 768px) {
      padding: 0;
    }

    .new-row {
      position: relative;
      .new-top {
        display: flex;
        align-items: center;
        height: 480px;
        padding: 0 30px 0 60px;

        @media screen and (max-width: 768px) {
          width: 100vw;
          height: 350px;
          padding: 0 1rem;
          margin: 0 auto;
        }

        .new-top-img {
          background-image: url("/img/about-1.jpg");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          width: 100%;
          height: 100%;

          @media screen and (max-width: 768px) {
            width: 100vw;
            height: 100%;
            background-size: cover;
            background-position: center top;
          }
        }
      }

      .new-text {
        position: absolute;
        top: 18%;
        left: 50.6%;

        @media screen and (max-width: 768px) {
          position: relative;
          left: 0;
          top: 0;
          padding: 0 1rem;
        }
        h2 {
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.5;
          font-size: 2.1rem;
          padding-right: 10rem;
          @media screen and (max-width: 768px) {
            padding: 0;
          }
        }

        p {
          color: gray;
          padding-right: 1.6rem;
          font-size: 15px;
          line-height: 1.8;
          @media screen and (max-width: 768px) {
            padding: 0;
          }
        }

        button {
          background: #fff;
          border: 1px solid #fff;
          color: #000;
          cursor: pointer;
          border-radius: 30px;
          box-shadow: 0px 24px 36px -11px rgb(0 0 0 / 9%);
          padding: 1rem 1.5rem;
        }
      }
    }

    .new-row-bottom {
      position: relative;
      height: 500px;
      display: flex;
      align-items: center;
      @media screen and (max-width: 768px) {
        height: 100%;
      }
      .new-text-2 {
        padding: 0 0px 0 48px;
        @media screen and (max-width: 768px) {
          padding: 0 1rem;
        }
        h2 {
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.5;
          font-size: 2.1rem;
        }

        p {
          color: gray;
          font-size: 15px;
          line-height: 1.8;
        }

        button {
          background: #fff;
          border: 1px solid #fff;
          color: #000;
          cursor: pointer;
          border-radius: 30px;
          box-shadow: 0px 24px 36px -11px rgb(0 0 0 / 9%);
          padding: 1rem 1.5rem;
        }
      }

      .new-bottom-img {
        position: absolute;
        background-image: url("/img/about-2.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        width: 480px;
        top: -4.5rem;
        bottom: 0;
        border: 15px solid #fff;

        @media screen and (max-width: 768px) {
          position: relative;
          background-position: center top;
          width: 100vw;
          height: 350px;
          margin: 6rem auto 0 auto;
        }
      }
    }
  }
`
