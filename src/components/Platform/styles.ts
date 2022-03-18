import styled from "styled-components";
import { BsWindows } from "react-icons/bs";
import { BiWindow } from "react-icons/bi";

export const Container = styled.div``;

export const WindowsIcon = styled(BsWindows).attrs({
  size: 17,
  color: "#000000",
})`
  @media (max-width: 1080px) {
    margin-bottom: 0.15rem;
  }

  @media (max-width: 522px) {
    margin-bottom: 0.4rem;
  }
`;

export const BrowserIcon = styled(BiWindow).attrs({
  size: 17,
  color: "#000000",
})``;
