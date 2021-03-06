import styled from "styled-components";

interface ButtonProps {
  color: string;
}

export const Button = styled.button<ButtonProps>`
  padding: 4px 18px;
  background-color: ${(props) => `var(--${props.color})`};
  border: 1px white solid;
  border-color: ${(props) => `var(--${props.color})`};
  color: var(--background);
  border-radius: 25px;
  font-size: 1.1rem;
  transition: 500ms ease;

  &:hover {
    box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.05);
    filter: brightness(1.1);
    transform: scale(1.05);
  }
`;
