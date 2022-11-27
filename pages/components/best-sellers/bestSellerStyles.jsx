import styled from "styled-components"

export const BestSellerStyles = styled.section`
  padding: 9rem;

  @media screen and (max-width: 992px) {
    padding: 7rem 0;
  }

  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 40px;
      font-weight: 600;
    }

    p {
      font-size: 15px;
      font-weight: 400;
      color: gray;

      @media screen and (max-width: 600px) {
        text-align: center;
      }
    }
  }

  .bp-row {
    width: 100%;

    @media screen and (max-width: 600px) {
      margin: 0;
      flex-direction: column;
      gap: 2rem;
    }
    @media screen and (min-width: 600px) and (max-width: 992px) {
      margin: 0;
      flex-wrap: wrap;
    }
    .best-products {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
    }
  }
`
