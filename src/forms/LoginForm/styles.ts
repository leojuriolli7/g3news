import styled from "styled-components";

export const InputLabel = styled.label`
  font-size: 1.5rem;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    background: var(--background);
    font-size: 1.3rem;
    border: 1px white solid;
    width: 25rem;
    padding: 1rem 0.5rem;
    border-radius: 10px;

    @media (max-width: 508px) {
      width: 18rem;
      font-size: 1.2rem;
    }

    @media (max-width: 429px) {
      width: 14rem;
      font-size: 1rem;
    }
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #57d131;
  border: 1px #57d131 solid;
  color: var(--background);
  border-radius: 25px;
  font-size: 1.1rem;
  transition: 0.2s;
  margin-top: 2rem;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.05);

  &:hover {
    filter: brightness(1.1);
  }
`;
