import styled from "styled-components"

export const InfoStyles = styled.section`
  .info-container {
    padding: 0 3rem;

    @media screen and (max-width: 768px) {
      padding: 0;
      .row {
        flex-direction: column;
        padding: 0;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
      padding: 0;
    }

    .info-left {
      background-image: url("/img/about.jpg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      /* --bs-gutter-y: 0; */
      @media screen and (max-width: 768px) {
        height: 400px;
        padding: 0 !important;
        max-width: none;
      }
    }

    .info-right {
      padding: 6.8rem 3rem;
      @media screen and (max-width: 768px) {
        padding: 6rem 1.5rem;
      }

      @media screen and (min-width: 768px) and (max-width: 992px) {
        padding: 6rem 0rem 6rem 3rem;
      }
      .info-heading {
        h2 {
          font-size: 40px;
          padding: 0 1rem 0 0;
          font-weight: 600;
          line-height: 1.5;
          @media screen and (max-width: 768px) {
            padding: 0;
          }
        }
      }

      .info-content {
        p {
          font-size: 15px;
          color: gray;
          line-height: 1.8;
        }
      }

      .services {
        .service-item {
          .service-icon {
            margin-top: -2rem;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3.8rem;
            @media screen and (max-width: 992px) {
              width: 55%;
              margin: 0 auto;
            }

            img {
              width: 100%;
            }
          }

          .service-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 1rem;
            margin-top: -2rem;
            h3 {
              text-transform: uppercase;
              font-size: 14px;
              letter-spacing: 3px;
              color: #000;
            }

            p {
              color: gray;
              font-weight: 400;
              line-height: 1.8;
              font-size: 15px;
            }
          }
        }
      }
    }
  }
`
