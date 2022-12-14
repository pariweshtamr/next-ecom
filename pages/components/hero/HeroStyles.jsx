import styled from "styled-components"

// export const HeroStyles = styled.div`
//   padding: 0 2rem;
//   display: grid;
//   grid-template-columns: 1fr 3fr 1fr;

//   @media screen and (max-width: 856px) {
//     grid-template-areas:
//       "left center center"
//       "right right right";
//     > :first-child {
//       grid-area: left;
//       grid-template-rows: none;
//       gap: 2rem;
//     }
//     > :nth-child(2) {
//       grid-area: center;
//     }
//     > :nth-child(3) {
//       grid-area: right;
//       display: flex !important;
//       justify-content: space-around;
//       margin: 2rem 0;
//     }
//   }

//   @media screen and (max-width: 640px) {
//     padding: 0;
//     margin-bottom: -3rem;
//   }

//   .hero-sides {
//     display: grid;
//     grid-template-rows: 1fr 1fr;

//     .hero-text1 {
//       text-transform: uppercase;
//       font-size: 1.5rem;
//       width: min-content;
//       display: block;
//       font-weight: 600;
//       opacity: 87%;
//       @media screen and (min-width: 1801px) {
//         font-size: 2rem;
//       }
//       @media screen and (max-width: 856px) {
//         font-size: 0.9rem;
//         text-align: justify;
//       }
//     }

//     .hero-text2 {
//       display: flex;
//       flex-direction: column;
//       width: min-content;

//       > :first-child {
//         font-weight: 800;
//         font-size: 2.5rem;
//         opacity: 87%;
//         @media screen and (min-width: 1801px) {
//           font-size: 3rem;
//         }
//         @media screen and (max-width: 856px) {
//           font-size: 1.5rem;
//           text-align: left;
//         }
//         @media screen and (max-width: 640px) {
//           font-size: 1.2rem;
//           text-align: left;
//         }
//       }

//       > :last-child {
//         display: block;
//         opacity: 60%;
//         @media screen and (min-width: 1801px) {
//           font-size: 1.2rem;
//         }
//         @media screen and (max-width: 856px) {
//           font-size: 0.9rem;
//           text-align: justify;
//         }
//         @media screen and (max-width: 640px) {
//           font-size: 0.8rem;
//           text-align: left;
//         }
//       }
//     }

//     .hero-traffic {
//       display: flex;
//       flex-direction: column;
//       text-align: right;

//       > :first-child {
//         font-weight: 800;
//         font-size: 2.5rem;
//         opacity: 87%;
//         @media screen and (min-width: 1801px) {
//           font-size: 3rem;
//         }
//         @media screen and (max-width: 856px) {
//           font-size: 1.5rem;
//           text-align: left;
//         }
//         @media screen and (max-width: 640px) {
//           font-size: 1.2rem;
//           text-align: left;
//         }
//       }
//       > :nth-child(2) {
//         opacity: 60%;
//         @media screen and (min-width: 1801px) {
//           font-size: 1.2rem;
//         }
//         @media screen and (max-width: 640px) {
//           font-size: 0.9rem;
//         }
//       }
//     }

//     .hero-customers {
//       display: flex;
//       flex-direction: column;
//       text-align: right;

//       > :first-child {
//         font-weight: 800;
//         font-size: 2.5rem;
//         opacity: 87%;
//         @media screen and (min-width: 1801px) {
//           font-size: 3rem;
//         }
//         @media screen and (max-width: 856px) {
//           font-size: 1.5rem;
//           text-align: left;
//         }
//         @media screen and (max-width: 640px) {
//           font-size: 1.2rem;
//           text-align: right;
//         }
//       }
//       > :nth-child(2) {
//         opacity: 60%;
//         @media screen and (min-width: 1801px) {
//           font-size: 1.2rem;
//         }
//         @media screen and (max-width: 640px) {
//           font-size: 0.9rem;
//         }
//       }
//     }
//   }

//   .hero-img-wrapper {
//     display: flex;
//     align-items: baseline;
//     justify-content: center;
//     position: relative;

//     .circle {
//       width: 30rem;
//       height: 30rem;
//       border-radius: 50%;
//       filter: blur(1px);
//       position: absolute;
//       bottom: 0;
//       background: linear-gradient(#b91372, #6b0f1a);

//       @media screen and (min-width: 1801px) {
//         width: 35rem;
//         height: 35rem;
//       }

//       @media screen and (max-width: 856px) {
//         width: 70%;
//         height: 100%;
//         position: absolute;
//       }
//       @media screen and (max-width: 640px) {
//         top: 0;
//         width: 14rem;
//         height: 70%;
//       }
//     }

//     .hero-img {
//       width: 45rem;
//       height: auto;
//       position: absolute;
//       top: 50%;
//       left: 10%;
//       transform: translateY(-50%);
//       @media screen and (min-width: 1801px) {
//         width: 55rem;
//         left: 20%;
//       }

//       @media screen and (min-width: 856px) and (max-width: 1800px) {
//         left: 15%;
//         height: auto;
//       }
//       @media screen and (max-width: 856px) {
//         left: 2%;
//         width: 100%;
//         height: auto;
//       }
//       @media screen and (max-width: 640px) {
//         top: 35%;
//         left: -1.8rem;
//         width: 18rem;
//         height: auto;
//       }
//     }

//     .hero-cart {
//       position: absolute;
//       bottom: 15%;
//       right: 0;
//       display: flex;
//       align-items: center;
//       gap: 1rem;

//       @media screen and (min-width: 1801px) {
//         transform: scale(1.5);
//       }

//       @media screen and (max-width: 856px) {
//         bottom: -0.5rem;
//         right: 0rem;
//         transform: scale(0.9);
//       }

//       @media screen and (max-width: 640px) {
//         transform: scale(0.7);
//         bottom: 10%;
//       }

//       .svg1 {
//         width: 50px;
//         height: 50px;
//         font-size: 1.3rem;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         background: white;
//         color: #000;
//         border-radius: 50%;
//         border: 6px solid #b91372;
//       }

//       .hero-signup {
//         display: flex;
//         gap: 1rem;
//         align-items: center;
//         background: rgba(255, 255, 255, 0.87);
//         padding: 10px;
//         font-size: 0.8rem;
//         border-radius: 15px;
//         box-shadow: var(--shadow1);
//         cursor: pointer;

//         &:hover {
//           background: #f8f5f5;
//         }

//         > :first-child {
//           display: block;
//           width: 6rem;
//           color: #000;
//         }
//         > :nth-child(2) {
//           border-radius: 50%;
//           border: 1px solid skyblue;
//           display: flex;
//           width: 30px;
//           height: 30px;
//           padding: 5px;
//           align-items: center;
//           justify-content: center;
//           color: #000;
//         }
//       }
//     }
//   }
// `
export const HeroStyles = styled.div`
  height: 100vh;
  .hero {
    display: flex;
    margin-right: 0 !important;
    --bs-gutter-x: 0;
    height: 100%;

    .hero-left-col {
      flex: 0.8;

      padding: 0 4rem 0 8rem;

      @media screen and (max-width: 992px) {
        padding: 0;
      }

      .hero-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        @media screen and (max-width: 992px) {
          width: 100vw;
        }

        .left-top {
          @media screen and (max-width: 992px) {
            z-index: 2;
            color: #fff;
            text-align: center;
          }
          h6 {
            padding: 0 5rem;
            text-transform: uppercase;
            letter-spacing: 3.4px;
            font-weight: 300;
            font-size: 0.8rem;
          }

          hr {
            width: 6rem;
            color: #727272;
            margin-left: 1.5rem;

            @media screen and (max-width: 992px) {
              display: none;
            }
          }
        }

        .hero-banner {
          display: flex;
          @media screen and (max-width: 992px) {
            z-index: 2;
            color: #fff;
            text-align: center;
          }
          .hb-tag {
            flex: 0.5;
            display: flex;
            justify-content: start;
            align-items: flex-end;
            width: fit-content;

            @media screen and (max-width: 992px) {
              display: none;
            }

            h5 {
              writing-mode: vertical-rl;
              transform: rotate(180deg);
              font-weight: 200;
              text-transform: uppercase;
              letter-spacing: 3.8px;
              font-size: 0.68rem;
            }
          }

          .hb-main {
            flex: 4;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            @media screen and (max-width: 992px) {
              align-items: center;
            }

            .hero-banner-title {
              .hb-h4 {
                font-weight: 200;
              }
              h4 {
                font-size: 2.8rem;
                font-weight: 800;
              }
            }

            .hero-banner-p {
              p {
                font-size: 15px;
                font-weight: 400;
                line-height: 1.8;

                @media screen and (max-width: 992px) {
                  font-size: 18px;
                }
              }
            }

            button {
              width: max-content;
              padding: 18px 40px;
              color: #fff;
              border: none;
              outline: none;
              background: var(--orange);
              border-radius: 50px;
            }
          }
        }
      }
    }

    .hero-right-col {
      flex: 1;
      position: relative;
      background-position: center center;
      background-image: url("img/bg_1.jpg");
      background-size: cover;
      background-repeat: no-repeat;

      @media screen and (max-width: 992px) {
        position: absolute;
        width: 100vw;
        height: 100%;
        z-index: 1;
        filter: brightness(40%);
      }
    }
  }
`
