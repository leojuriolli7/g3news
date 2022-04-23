import * as S from "./styles";
import { useTranslation } from "react-i18next";
import footerLogo from "../../assets/logosmall.svg";

export function Footer() {
  const { t }: { t: any } = useTranslation();

  return (
    <S.Container>
      <S.Content>
        <S.Image
          src={footerLogo}
          title={t("logoTitle")}
          onClick={() => window.open("https://www.mmobomb.com")}
        />
      </S.Content>
    </S.Container>
  );
}
