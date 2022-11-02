import styled from "styled-components"

export const TestimonialsStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;

  .testimonials-top {
    display: grid;
    align-items: flex-end;
    width: 100%;
    grid-template-columns: 1fr 2fr 1fr;

    > :nth-child(3) {
      text-align: right;
    }

    .t-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      > :nth-child(1) {
        font-size: 2rem;
        font-weight: bold;
        text-transform: uppercase;
        display: block;
      }
      > :nth-child(2) {
        font-size: 0.8rem;
        text-transform: uppercase;
        display: block;
      }
    }
    img {
      width: 25rem;
      height: auto;
      justify-self: center;
    }
  }

  .t-title {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .t-carousal {
    width: 100%;

    .t-swiper {
      padding: 2rem;

      .testimonial {
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 0.5rem;
        padding: 1rem;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.87);
        color: var(--black);
        box-shadow: 0rem 1rem 3rem -50px #fdfdfd;

        img {
          position: absolute;
          width: 3rem;
          top: -1.5rem;
          left: 45%;
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
