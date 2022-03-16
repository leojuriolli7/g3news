import styled from "styled-components";

export const Button = styled.button`
  padding: 4px 18px;
  background-color: #57d131;
  border: 1px #57d131 solid;
  color: var(--background);
  border-radius: 25px;
  font-size: 1.1rem;
  transition: 0.2s;

  &:hover {
    box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.05);
    filter: brightness(1.1);
  }
`;
