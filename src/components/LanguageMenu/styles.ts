import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: -67px;
  right: -5px;
  background: var(--header-background);
  padding: 0.5rem 1rem;
  border: 1px white solid;
  gap: 1rem;
  display: flex;
  box-shadow: 1px 5px 15px 1px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 1080px) {
    right: 30px;
    bottom: -65px;
  }

  @media (max-width: 720px) {
    bottom: -63px;
  }

  @media (max-width: 715px) {
    display: none;
  }
`;

interface ImageContainerProps {
  isActive: boolean;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 30px;

  border: ${(props) => (props.isActive ? "2px solid black" : "0px")};
  border-radius: 50%;

  &:hover {
    transition: 0.3s;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const FlagImage = styled.img``;
