import styled from "styled-components";

export const LoadingContainer = styled.div.attrs({
  className: "animate__animated animate__fadeIn",
})`
  height: 100vh;
`;

export const LottieContainer = styled.div``;

export const LoadingTextContainer = styled.div`
  text-align: center;
`;

export const LoadingText = styled.h2`
  margin-top: -5rem;
  color: var(--nav-text);
  font-size: 3rem;

  @media (max-width: 338px) {
    font-size: 3.5rem;
  }

  @media (max-width: 338px) {
    font-size: 3rem;
  }

  @media (max-width: 279px) {
    font-size: 2.5rem;
  }
`;
