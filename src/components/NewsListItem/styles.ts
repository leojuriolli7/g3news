import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "animate__animated animate__fadeIn",
})`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 100%;

  @media (max-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 636px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--shape);
  border-radius: 10px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  transition: all 400ms ease;
  cursor: pointer;
  padding-bottom: 1rem;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 100%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const NewsThumbnail = styled.img``;

export const NewsTitle = styled.h2`
  padding-top: 1rem;
  font-size: 1.2rem;
  text-align: center;
  color: var(--news-title);
  overflow: hidden;
  display: -webkit-box;
  width: 90%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const NewsDescription = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--text);
  overflow: hidden;
  display: -webkit-box;
  width: 90%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
