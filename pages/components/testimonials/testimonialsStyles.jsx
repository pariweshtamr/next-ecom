import styled from "styled-components"

export const TestimonialsStyles = styled.section`
  padding: 8rem 0rem 0 0;
  @media screen and (max-width: 768px) {
    padding: 4rem 0;
  }

  .title {
    p {
      color: gray;
      text-align: center;
    }
  }

  .t-carousal {
    width: 100%;
    padding: 4rem;

    @media screen and (max-width: 768px) {
      padding: 2rem 0;
    }

    .t-swiper {
      padding: 2rem;

      .testimonial {
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 0.5rem;
        padding: 1rem;
        gap: 1rem;
        justify-content: center;
        background: rgba(255, 255, 255, 0.87);
        color: var(--black);
        box-shadow: 0rem 1rem 3rem -50px #fdfdfd;

        .user-img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          position: relative;

          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
          .quote {
            position: absolute;
            bottom: -10px;
            right: 0;
            width: 40px;
            height: 40px;
            background: #fff;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            -ms-border-radius: 50%;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--orange);
          }
        }

        .text {
          .line {
            position: relative;
            border-left: 1px solid #e6e6e6;
            line-height: 1.8;
            &::after {
              position: absolute;
              content: "";
              top: 50%;
              left: -2px;
              -webkit-transform: translateY(-50%);
              -ms-transform: translateY(-50%);
              transform: translateY(-50%);
              width: 3px;
              height: 30px;
              background: #ffa45c;
            }
          }

          .name {
            font-weight: 400;
            font-size: 18px;
            color: #000;
          }
        }

        hr {
          height: 1px;
          width: 80%;
          background: rgb(198, 198, 198);
          border: none;
        }

        > span:nth-of-type(1) {
          align-items: center;
          font-size: 0.8rem;
          margin-top: 2rem;
          letter-spacing: 1px;
        }
        > span:nth-of-type(2) {
          font-weight: 500;
        }
      }
    }
  }
`
