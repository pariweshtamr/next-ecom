import styled from "styled-components"

export const NewStockStyles = styled.section`
  .new-container {
    padding: 0 4rem;

    .new-row {
      position: relative;
      .new-top {
        display: flex;
        align-items: center;
        height: 480px;
        padding: 0 30px 0 60px;

        .new-top-img {
          background-image: url("/img/about-1.jpg");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          width: 100%;
          height: 100%;
        }
      }

      .new-text {
        position: absolute;
        top: 18%;
        left: 50.6%;
        h2 {
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.5;
          font-size: 2.1rem;
          padding-right: 10rem;
        }

        p {
          color: gray;
          padding-right: 1.6rem;
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
    }

    .new-row-bottom {
      position: relative;
      height: 500px;
      display: flex;
      align-items: center;
      .new-text-2 {
        padding: 0 0px 0 48px;
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
      }
    }
  }
`
