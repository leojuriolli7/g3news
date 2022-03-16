import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Platform } from "../Platform";
import * as S from "./styles";
import { LoadingLottie } from "../LoadingLottie";

interface GamesInterface {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  release_date: string;
}

export function GamesListItem() {
  const [games, setGames] = useState<GamesInterface[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGames = () => {
    api.get("games").then((response) => {
      setGames(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      {loading && <LoadingLottie />}
      {!loading && (
        <S.Container>
          {games.map((game) => (
            <S.Content key={game.id} onClick={() => window.open(game.game_url)}>
              <S.GameThumbnail src={game.thumbnail} alt="Game thumbnail" />
              <S.GameInfoContainer>
                <S.GameTitle>{game.title}</S.GameTitle>
                <S.GameDescription>{game.short_description}</S.GameDescription>
                <S.GameRelease>{game.release_date}</S.GameRelease>
                <S.GameExtraDetailsContainer>
                  <Platform platform={game.platform} />
                  <S.GameExtraDetails>{game.genre}</S.GameExtraDetails>
                  <S.GameExtraDetails>{game.publisher}</S.GameExtraDetails>
                </S.GameExtraDetailsContainer>
              </S.GameInfoContainer>
            </S.Content>
          ))}
        </S.Container>
      )}
    </>
  );
}
