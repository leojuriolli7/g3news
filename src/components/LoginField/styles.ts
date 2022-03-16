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
