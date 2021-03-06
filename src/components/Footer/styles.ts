import styled from "styled-components";

export const Container = styled.footer`
  background: var(--header-background);
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 45px;

  &:hover {
    cursor: pointer;
    filter: brightness(2);
  }
`;
