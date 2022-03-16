import { RootState } from "../../store/";
import { useSelector } from "react-redux";
import * as S from "./styles";
import logoImg from "../../assets/headerlogo.svg";
import logoImgSmaller from "../../assets/logosmall.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageMenu } from "../LanguageMenu";
import { HamburguerMenu } from "../HamburguerMenu";
import { UserPopover } from "../UserPopover";

import { Button } from "../Button";

export function Header() {
  const history = useLocation();
  const navigate = useNavigate();
  const { t }: { t: any } = useTranslation();
  const token = useSelector((state: RootState) => state.user.token);

  return (
    <S.Container>
      <S.Content>
        <S.ImageContainer>
          <S.Image
            title={t("logoTitle")}
            src={logoImg}
            alt="Small logo"
            width={40}
            height={40}
            onClick={() => window.open("https://www.mmobomb.com/api")}
          />
          <S.ImageSmaller
            src={logoImgSmaller}
            onClick={() => window.open("https://www.mmobomb.com/api")}
          />
        </S.ImageContainer>
        <S.Navigation>
          <S.UnorganizedList>
            <S.ListItem>
              <S.MenuOption
                onClick={() => navigate("/")}
                isSelected={history.pathname === "/"}
              >
                {t("home")}
              </S.MenuOption>
            </S.ListItem>
            <S.ListItem>
              <S.MenuOption
                onClick={() => navigate("/games")}
                isSelected={history.pathname === "/games"}
              >
                {t("games")}
              </S.MenuOption>
            </S.ListItem>
            <S.ListItem>
              <S.MenuOption
                onClick={() => navigate("/giveaways")}
                isSelected={history.pathname === "/giveaways"}
              >
                {t("giveaways")}
              </S.MenuOption>
            </S.ListItem>
            <S.ListItem>
              {token !== null ? (
                <UserPopover />
              ) : (
                <Button
                  text={t("login")}
                  onClick={() => navigate("/login")}
                  type="button"
                />
              )}
            </S.ListItem>

            <LanguageMenu />
          </S.UnorganizedList>
          <HamburguerMenu />
        </S.Navigation>
      </S.Content>
    </S.Container>
  );
}
