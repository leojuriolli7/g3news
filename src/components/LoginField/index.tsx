import { RootState } from "../../store/";
import { useSelector } from "react-redux";
import joystick from "../../assets/gamepad2.svg";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "animate.css";
import { LoginForm } from "../../forms/LoginForm";

export function LoginField() {
  const { t }: { t: any } = useTranslation();
  const isUserLogged = useSelector((state: RootState) => state.user.isLogged);
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <S.AnimationContainer>
          <S.Animation src={joystick} />
        </S.AnimationContainer>
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
