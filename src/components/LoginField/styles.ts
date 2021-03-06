import styled from "styled-components";

export const Container = styled.main.attrs({
  className: "animate__animated animate__fadeIn",
})`
  min-height: 80vh;
  margin: 2rem 0 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 715px) {
    margin-top: 2rem;
  }

  button {
    padding: 12px 24px;
    border-radius: 25px;
    margin-top: 2rem;
    font-size: 1.2rem;
    box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.05);
  }
`;

export const Content = styled.div.attrs({
  className: "animate__animated animate__zoomIn",
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 25px;
  background: var(--shape);
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  padding: 0 4rem 3rem 4rem;

  @media (max-width: 368px) {
    padding: 0 2rem 3rem 2rem;
  }

  form {
    display: flex;
    gap: 2rem;
    flex-direction: column;
  }
`;

export const LoginTitle = styled.h1`
  font-size: 4rem;
  margin: 4rem 0 3rem 0;
`;

export const AlreadyLoggedInMessage = styled.h2`
  margin: 6rem 0 3rem 0;
`;

export const HomeLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: var(--nav-text);
  font-size: 1.25rem;

  &:hover {
    color: var(--nav-text);
    filter: brightness(1.7);
  }
`;

export const AnimationContainer = styled.div.attrs({
  className: "animate__animated animate__rotateIn",
})`
  position: absolute;
  top: -30px;
  right: -20px;
  z-index: 2;
`;

export const Animation = styled.img`
  width: 160px;
  animation: shake-animation 3s ease infinite;
  transform-origin: 50% 50%;
  animation-delay: 3s;

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
