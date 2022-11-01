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
      background: rgba(255, 255, 255, 0.87);
      border-radius: 10px;
      padding: 1rem;
      color: var(--black);
      overflow: hidden;
      position: relative;
      display: flex;
    }
  }
`
