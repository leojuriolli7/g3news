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
  width: 95%;
  align-items: space-around;
  background: var(--shape);
  border-radius: 10px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  transition: all 400ms ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 667px) {
    flex-direction: column;
  }
`;

export const GiveawayThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  @media (max-width: 667px) {
    padding-top: 1rem;
  }
`;

export const GiveawayThumbnail = styled.img`
  max-width: 100%;
  height: auto;
`;

export const GiveawayInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const GiveawayTitle = styled.h2`
  padding-top: 1rem;
  font-size: 1.2rem;
  line-height: 30px;
  text-align: center;
  color: var(--news-title);

  overflow: hidden;
  display: -webkit-box;
  width: 90%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const GiveawayDescription = styled.p`
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

export const ProgressBarContainer = styled.div`
  width: 90%;
  text-align: center;
  padding-bottom: 1rem;
`;

export const KeysLeft = styled.p`
  color: var(--text);
`;
