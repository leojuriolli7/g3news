import * as S from "./styles";
import { MainHeading } from "../MainHeading";
import { GiveawaysListItem } from "../GiveawaysListItem";
import { useTranslation } from "react-i18next";

export function GiveawaysList() {
  const { t }: { t: any } = useTranslation();

  return (
    <S.Container>
      <MainHeading
        title={t("giveawaysTitle")}
        description={t("giveawaysDescription")}
      />
      <GiveawaysListItem />
    </S.Container>
  );
}
