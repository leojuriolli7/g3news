import * as S from "./styles";
import { MainHeading } from "../MainHeading";
import { useTranslation } from "react-i18next";
import { GamesListItem } from "../GamesListItem";

export function GamesList() {
  const { t }: { t: any } = useTranslation();

  return (
    <S.Container>
      <MainHeading
        title={t("gamesTitle")}
        description={t("gamesDescription")}
      />
      <GamesListItem />
    </S.Container>
  );
}
/*
  infinite loading 
*/
