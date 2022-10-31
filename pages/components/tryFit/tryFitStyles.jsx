import styled from "styled-components"

export const TryFitStyles = styled.div`
  margin: 6rem 0;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  .try-left {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
      bottom: 2rem;
    }
  }

  .try-right {
    display: block;
    color: black;

    .wrapper {
      width: 30rem;
      height: 18rem;
      overflow: hidden;
      border-radius: 20px;

      video {
        border-radius: 20px;
      }
    }
  }
`
