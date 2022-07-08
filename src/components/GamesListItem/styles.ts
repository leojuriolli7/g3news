import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "animate__animated animate__fadeIn",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;
  max-width: 100%;
`;

export const Content = styled.div`
  display: flex;
  width: 99%;
  align-items: space-around;
  background: var(--shape);
  border-radius: 10px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  transition: all 400ms ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 522px) {
    flex-direction: column;
  }
`;

export const GameThumbnail = styled.img`
  max-width: 100%;
  height: auto;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 1037px) {
    width: 45vw;
    object-fit: fit;
  }

  @media (max-width: 522px) {
    width: 100%;
    border-bottom-left-radius: 0;
    border-top-right-radius: 10px;
  }
`;

export const GameInfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const GameTitle = styled.h2`
  padding-top: 1rem;
  font-size: 1.7rem;
  line-height: 30px;
  text-align: center;
  color: var(--news-title);
  overflow: hidden;
  display: -webkit-box;
  width: 90%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 1037px) {
    font-size: 1.55rem;
  }

  @media (max-width: 574px) {
    line-height: normal;
  }

  @media (max-width: 522px) {
    font-size: 2rem;
  }
`;

export const GameDescription = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--text);
  overflow: hidden;
  display: -webkit-box;
  width: 90%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 629px) {
    margin-top: 0;
  }

  @media (max-width: 567px) {
    -webkit-line-clamp: 3;
  }
  @media (max-width: 522px) {
    font-size: 1.2rem;
    margin-top: 0.1rem;
  }
`;

export const GameRelease = styled(GameDescription)`
  font-size: 0.8rem;
  margin: 0;

  @media (max-width: 522px) {
    font-size: 1rem;
  }
`;

export const GameExtraDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.9rem 0 0.8rem 0;
  gap: 1rem;

  @media (max-width: 594px) {
    margin-top: 0.6rem;
  }
`;

export const GameExtraDetails = styled.p`
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 0;
  color: var(--text);

  @media (max-width: 522px) {
    font-size: 1rem;
    padding-bottom: 0.4rem;
  }
`;
