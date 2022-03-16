import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid white;
  border-radius: 15px;
`;

interface ImageContainerProps {
  isActive: boolean;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;

  border: ${(props) => (props.isActive ? "3px solid black" : "0px")};
  border-radius: 50%;

  &:hover {
    transition: 0.3s;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const FlagImage = styled.img`
  width: 50px;
`;
