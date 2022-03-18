import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "animate__animated animate__fadeIn",
})`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.main.attrs({
  className: "animate__animated animate__zoomIn",
})`
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  padding: 2.5rem 5rem;
  border-radius: 10px;
  background: var(--header-background);
  text-align: center;

  a {
    color: var(--nav-text);
    text-decoration: underline;

    &:hover {
      filter: brightness(2);
    }
  }

  @media (max-width: 470px) {
    padding: 1.5rem 2.5rem;
  }

  @media (max-width: 340px) {
    padding: 1.3rem 1rem;
  }
`;

export const ErrorTitle = styled.h1`
  text-align: center;
  color: var(--text-title);
  font-size: 3rem;
`;

export const ErrorMessage = styled.h2`
  text-align: center;
  color: var(--text-title);
  font-size: 1.5rem;
`;

export const GoBackText = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
  color: var(--text-title);
`;
