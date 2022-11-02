import styled from "styled-components"

export const HeroStyles = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  .hero-sides {
    display: grid;
    grid-template-rows: 1fr 1fr;

    .hero-text1 {
      text-transform: uppercase;
      font-size: 1.5rem;
      width: min-content;
      display: block;
      font-weight: 600;
      opacity: 87%;
    }

    .hero-text2 {
      display: flex;
      flex-direction: column;
      width: min-content;

      > :first-child {
        font-weight: 800;
        font-size: 2.5rem;
        opacity: 87%;
      }

      > :last-child {
        display: block;
        opacity: 60%;
      }
    }

    .hero-traffic {
      display: flex;
      flex-direction: column;
      text-align: right;

      > :first-child {
        font-weight: 800;
        font-size: 2.5rem;
        opacity: 87%;
      }
      > :nth-child(2) {
        opacity: 60%;
      }
    }

    .hero-customers {
      display: flex;
      flex-direction: column;
      text-align: right;

      > :first-child {
        font-weight: 800;
        font-size: 2.5rem;
        opacity: 87%;
      }
      > :nth-child(2) {
        opacity: 60%;
      }
    }
  }

  .hero-img-wrapper {
    display: flex;
    align-items: baseline;
    justify-content: center;
    position: relative;

    .circle {
      width: 30rem;
      height: 30rem;
      border-radius: 50%;
      /* z-index: -1; */
      position: absolute;
      bottom: 0;
      background: linear-gradient(#b91372, #6b0f1a);
    }

    .hero-img {
      width: 29rem;
      height: auto;
      position: absolute;
      bottom: 0;
    }

    .hero-cart {
      position: absolute;
      bottom: 25%;
      right: 0;
      display: flex;
      align-items: center;
      gap: 1rem;

      .svg1 {
        width: 50px;
        height: 50px;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        color: #000;
        border-radius: 50%;
        border: 6px solid #b91372;
      }

      .hero-signup {
        display: flex;
        gap: 1rem;
        align-items: center;
        background: rgba(255, 255, 255, 0.87);
        padding: 10px;
        font-size: 0.8rem;
        border-radius: 15px;
        box-shadow: var(--shadow1);
        cursor: pointer;

        &:hover {
          background: #f8f5f5;
        }

        > :first-child {
          display: block;
          width: 6rem;
          color: #000;
        }
        > :nth-child(2) {
          border-radius: 50%;
          border: 1px solid skyblue;
          display: flex;
          width: 30px;
          height: 30px;
          padding: 5px;
          align-items: center;
          justify-content: center;
          color: #000;
        }
      }
    }
  }
`
