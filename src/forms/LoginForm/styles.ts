import styled from "styled-components";

export const InputLabel = styled.label`
  font-size: 1.5rem;
`;

export const FieldContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  input {
    background: var(--background);
    font-size: 1.3rem;
    border: 1px white solid;
    width: 25rem;
    padding: 1rem 2.7rem 1rem 0.5rem;
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
