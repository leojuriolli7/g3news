import { RootState } from "../../store/";
import { useSelector } from "react-redux";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "animate.css";
import { SignupForm } from "../../forms/SignupForm";
import invaderImage from "../../assets/invader.svg";

export function SignupField() {
  const { t }: { t: any } = useTranslation();
  const isUserLogged = useSelector((state: RootState) => state.user.isLogged);
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <S.AnimationContainer>
          <S.Animation src={invaderImage} />
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
            <S.SignupTitle>{t("signup")}</S.SignupTitle>
            <SignupForm />
          </>
        )}
      </S.Content>
    </S.Container>
  );
}
