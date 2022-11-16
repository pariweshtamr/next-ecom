import styled from "styled-components"

export const LatestDesignStyles = styled.div`
  margin: 6rem 0;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media screen and (max-width: 856px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
    margin: 2rem 0;
    padding: 1rem;
  }

  .try-left {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;

    > :nth-child(1) {
      font-size: 2rem;
      text-transform: uppercase;
      display: block;
      font-weight: 600;
    }

    > :nth-child(2) {
      font-size: 1.5rem;
      text-transform: uppercase;
      display: block;
      width: 20rem;
    }
    > :nth-child(3) {
      font-size: 1.6rem;
      font-weight: 600;
    }

    img {
      position: absolute;
      width: 10rem;
      height: auto;
      bottom: 0rem;
      @media screen and (max-width: 856px) {
        bottom: 2.5rem;
      }
    }
  }

  .try-right {
    display: flex;
    align-items: center;
    .wrapper {
      width: 26rem;
      height: auto;
      overflow: hidden;
      border-radius: 20px;

      @media screen and (max-width: 640px) {
        width: 100%;
      }

      video {
        border-radius: 10px;
        width: 100%;

        source {
          width: 100%;
          margin: 0 auto;
        }
      }
    }
  }
`
