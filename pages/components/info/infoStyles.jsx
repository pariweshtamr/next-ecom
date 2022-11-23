import styled from "styled-components"

export const InfoStyles = styled.section`
  .info-container {
    padding: 0 3rem;

    .info-left {
      background-image: url("/img/about.jpg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      /* --bs-gutter-y: 0; */
    }

    .info-right {
      padding: 6.8rem 3rem;
      .info-heading {
        h2 {
          font-size: 2.8rem;
          padding: 0 1rem 0 0;
          font-weight: 500;
        }
      }

      .info-content {
        p {
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
            padding: 3.5rem;

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
            margin-top: -1rem;
            h3 {
              text-transform: uppercase;
              font-size: 0.9rem;
              letter-spacing: 3px;
              color: darkslategray;
            }

            p {
              color: gray;
              font-weight: 200;
              line-height: 1.8;
            }
          }
        }
      }
    }
  }
`
