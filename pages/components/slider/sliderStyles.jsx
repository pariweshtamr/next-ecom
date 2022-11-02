import styled from "styled-components"

export const SliderStyles = styled.div`
  position: relative;
  margin-top: 5rem;
  @media screen and (max-width: 856px) {
    height: max-content;
  }
  .swiper {
    width: 70%;
    height: 12rem;
    position: unset;
    @media screen and (min-width: 1801px) {
      height: max-content;
    }

    @media screen and (max-width: 856px) {
      width: 100%;
      height: max-content;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: #fff;
      opacity: 87%;
      @media screen and (max-width: 856px) {
        display: none;
      }
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
      padding: 1rem 0 1rem 1rem;
      color: var(--black);
      overflow: hidden;
    }
  }
`
