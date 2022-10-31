import styled from "styled-components"

export const SliderStyles = styled.div`
  position: relative;
  margin-top: 5rem;
  .swiper {
    width: 70%;
    height: 12rem;
    position: unset;
    .swiper-button-next,
    .swiper-button-prev {
      color: #fff;
    }

    .swiper-button-prev {
      left: 6rem;
    }
    .swiper-button-next {
      right: 6rem;
    }

    .swiper-slide {
      background: #fff;
      border-radius: 10px;
      padding: 1rem;
      color: var(--black);
      overflow: hidden;
      position: relative;
      display: flex;

      .img-product {
        transform: rotate(25deg);
        position: absolute;
        right: 0;
        bottom: 0;
      }

      .left-s {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > :nth-child(2) {
          font-size: 2rem;
          font-weight: bold;
        }
        > :nth-child(3) {
          font-size: 0.6rem;
          border: 1px solid var(--black);
          width: max-content;
          border-radius: 15px;
          padding: 5px 10px;
          cursor: pointer;

          &:hover {
            background: linear-gradient(#b91372, #6b0f1a);
            border: 1px solid #b91372;
            color: #fff;
          }
        }

        .name {
          display: flex;
          flex-direction: column;

          &:nth-child(1) {
            font-size: 1.4rem;
            font-weight: 600;
          }
          > :nth-child(2) {
            font-size: 0.8rem;
            font-weight: 600;
          }
        }
      }
    }
  }
`
