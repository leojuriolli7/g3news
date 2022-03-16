import { useEffect, useState } from "react";
import { api } from "../../services/api";
import * as S from "./styles";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoadingLottie } from "../LoadingLottie";

interface GiveawaysInterface {
  id: number;
  title: string;
  keys_left: string;
  thumbnail: string;
  short_description: string;
  giveaway_url: string;
}

export function GiveawaysListItem() {
  const [giveaways, setGiveaways] = useState<GiveawaysInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGiveaways = () => {
    api.get("giveaways").then((response) => {
      setGiveaways(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchGiveaways();
  }, []);

  return (
    <>
      {loading && <LoadingLottie />}
      {!loading && (
        <S.Container>
          {giveaways.map((giveaway) => (
            <S.Content
              key={giveaway.id}
              onClick={() => window.open(giveaway.giveaway_url)}
            >
              <S.GiveawayThumbnailContainer>
                <S.GiveawayThumbnail
                  src={giveaway.thumbnail}
                  alt="Giveaway thumbnail"
                />
              </S.GiveawayThumbnailContainer>
              <S.GiveawayInfoContainer>
                <S.GiveawayTitle>{giveaway.title}</S.GiveawayTitle>
                <S.GiveawayDescription>
                  {giveaway.short_description}
                </S.GiveawayDescription>
                <S.ProgressBarContainer>
                  <S.KeysLeft>{giveaway.keys_left} keys left.</S.KeysLeft>
                  <ProgressBar
                    now={parseInt(giveaway.keys_left, 10)}
                    label={`${parseInt(giveaway.keys_left, 10)}%`}
                    animated={true}
                    variant="success"
                  />
                </S.ProgressBarContainer>
              </S.GiveawayInfoContainer>
            </S.Content>
          ))}
        </S.Container>
      )}
    </>
  );
}
