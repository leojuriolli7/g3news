import * as S from "./styles";
import { RootState } from "../../store/";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function ProfilePage() {
  const { t }: { t: any } = useTranslation();
  const token = useSelector((state: RootState) => state.user.token);
  const navigate = useNavigate();
  const profileImage = useSelector(
    (state: RootState) => state.user.profileImage
  );
  const firstName = useSelector((state: RootState) => state.user.firstName);
  const lastName = useSelector((state: RootState) => state.user.lastName);

  return (
    <>
      {token !== null ? (
        <S.Container>
          <S.ProfileContainer>
            <S.ProfileDetailsContainer>
              <S.ProfileTitle>{t("yourProfile")}</S.ProfileTitle>
              <S.ProfileImage src={profileImage} />
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
