import { RootState } from "../../store/";
import { useSelector } from "react-redux";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "animate.css";
import { LoginForm } from "../../forms/LoginForm";
import { LoginAnimation } from "../LoginAnimation";

export function LoginField() {
  const { t }: { t: any } = useTranslation();
  const token = useSelector((state: RootState) => state.user.token);
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <LoginAnimation />
        {token !== null ? (
          <>
            <S.AlreadyLoggedInMessage>
              {t("alreadyLoggedInMessage")}
            </S.AlreadyLoggedInMessage>
            <S.HomeLink onClick={() => navigate("/")}>
              {t("errorLink")}
            </S.HomeLink>
          </>
        ) : (
          <>
            <S.LoginTitle>{t("login")}</S.LoginTitle>
            <LoginForm />
          </>
        )}
      </S.Content>
    </S.Container>
  );
}
