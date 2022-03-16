import styled from "styled-components";

export const ImageContainer = styled.div`
  position: absolute;
  top: -30px;
  right: -20px;
  transform: rotate(20deg);
  z-index: 2;
`;

export const Image = styled.img`
  width: 160px;
  animation: shake-animation 3s ease infinite;
  transform-origin: 50% 50%;

  @keyframes shake-animation {
    0% {
      transform: translate(0, 0);
    }
    1.78571% {
      transform: translate(14px, 0);
    }
    3.57143% {
      transform: translate(0, 0);
    }
    5.35714% {
      transform: translate(14px, 0);
    }
    7.14286% {
      transform: translate(0, 0);
    }
    8.92857% {
      transform: translate(14px, 0);
    }
    10.71429% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @media (max-width: 625px) {
    width: 100px;
  }
`;
