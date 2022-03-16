import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "animate__animated animate__fadeIn",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ListTitle = styled.h1`
  color: var(--text-title);
  font-size: 4rem;

  @media (max-width: 338px) {
    font-size: 4.5rem;
    line-height: 55px;
  }

  @media (max-width: 338px) {
    font-size: 4rem;
  }

  @media (max-width: 279px) {
    font-size: 3.2rem;
  }

  @media (max-width: 226px) {
    font-size: 2.7rem;
  }
`;

export const ListDescription = styled.p`
  color: var(--nav-text);
  margin-top: 1rem;
  font-size: 1.5rem;

  @media (max-width: 338px) {
    font-size: 1.3rem;
    padding: 0 0.5rem;
  }
`;
