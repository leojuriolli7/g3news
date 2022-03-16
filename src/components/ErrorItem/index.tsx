import { Link } from "react-router-dom";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export function ErrorItem() {
  const { t }: { t: any } = useTranslation();

  return (
    <S.Container>
      <S.Content>
        <S.ErrorTitle>{t("errorTitle")}</S.ErrorTitle>
        <S.ErrorMessage>{t("errorMessage")}</S.ErrorMessage>
        <S.GoBackText>
          <Link to="/">{t("errorLink")}</Link>
        </S.GoBackText>
      </S.Content>
    </S.Container>
  );
}
