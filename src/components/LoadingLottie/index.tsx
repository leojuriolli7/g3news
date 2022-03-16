import Lottie from "react-lottie";
import * as animationData from "../../assets/animations/amongus.json";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export function LoadingLottie() {
  const { t }: { t: any } = useTranslation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.LoadingContainer>
      <S.LottieContainer>
        <Lottie options={defaultOptions} />
      </S.LottieContainer>
      <S.LoadingTextContainer>
        <S.LoadingText>{t("loading")}</S.LoadingText>
      </S.LoadingTextContainer>
    </S.LoadingContainer>
  );
}
