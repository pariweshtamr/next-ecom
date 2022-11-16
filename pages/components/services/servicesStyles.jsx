import styled from "styled-components"

export const ServicesStyles = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  > :nth-child(1) {
    background: #fcefe9;
    box-shadow: 0px 15px 24px 3px rgba(252, 239, 233, 0.3);
  }
  > :nth-child(2) {
    background: #cfe9ed;
    box-shadow: 0px 15px 24px 3px rgba(206, 232, 239, 0.3);
  }
  > :nth-child(3) {
    background: #e4ecb7;
    box-shadow: 0px 15px 24px 3px rgba(228, 236, 183, 0.3);
  }
  > :nth-child(4) {
    background: #d9e6ff;
    box-shadow: 0px 15px 24px 3px rgba(217, 230, 255, 0.3);
  }

  .service-item {
    display: flex;
    color: var(--black);
    gap: 1rem;
    padding: 0.5rem 2rem 0.5rem 1.2rem;
    border-radius: 8px;
    width: 21rem;

    .service-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 3.5rem;
        background: var(--main);
        padding: 10px;
        border-radius: 50%;
        color: #fff;
      }
    }

    .service-detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
      padding-right: 2rem;
      h3 {
        font-weight: 500;
        margin-bottom: -10px;
      }

      p {
        font-weight: 300;
        font-size: 16px;
      }
    }
  }
`
