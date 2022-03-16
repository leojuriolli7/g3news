import * as S from "./styles";
import { MainHeading } from "../MainHeading";
import { NewsListItem } from "../NewsListItem";
import { useTranslation } from "react-i18next";

export function NewsList() {
  const { t }: { t: any } = useTranslation();

  return (
    <S.Container>
      <MainHeading title={t("homeTitle")} description={t("homeDescription")} />
      <NewsListItem />
    </S.Container>
  );
}
