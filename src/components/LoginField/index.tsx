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
  const isUserLogged = useSelector((state: RootState) => state.user.isLogged);
  const user = useSelector((state: RootState) => state.user);
  console.log("~ user", user);
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <LoginAnimation />
        {isUserLogged ? (
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
