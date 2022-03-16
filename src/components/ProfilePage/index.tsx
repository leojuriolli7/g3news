import * as S from "./styles";
import { RootState } from "../../store/";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DefaultImage from "../../assets/default-user-image.png";

export function ProfilePage() {
  const navigate = useNavigate();
  const { t }: { t: any } = useTranslation();
  const isUserLogged = useSelector((state: RootState) => state.user.isLogged);
  const firstName = useSelector((state: RootState) => state.user.firstName);
  const profileImage = useSelector(
    (state: RootState) => state.user.profileImage
  );
  const lastName = useSelector((state: RootState) => state.user.lastName);

  return (
    <>
      {isUserLogged ? (
        <S.Container>
          <S.ProfileContainer>
            <S.ProfileDetailsContainer>
              <S.ProfileTitle>{t("yourProfile")}</S.ProfileTitle>
              <S.ProfileImage src={profileImage || DefaultImage} />
              <S.ProfileName>{`${firstName} ${lastName}`}</S.ProfileName>
            </S.ProfileDetailsContainer>
          </S.ProfileContainer>
        </S.Container>
      ) : (
        <S.ErrorContainer>
          <S.ProfileContainer>
            <S.ProfileDetailsContainer>
              <S.ErrorTitle>{t("errorTitle")}</S.ErrorTitle>
              <S.ErrorDescription>{t("notLoggedInMessage")}</S.ErrorDescription>
              <S.ErrorLink onClick={() => navigate("/")}>
                {t("errorLink")}
              </S.ErrorLink>
            </S.ProfileDetailsContainer>
          </S.ProfileContainer>
        </S.ErrorContainer>
      )}
    </>
  );
}
