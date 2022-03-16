import * as S from "./styles";

interface PlatformInterface {
  platform: string;
}

export function Platform({ platform }: PlatformInterface) {
  return (
    <S.Container>
      {platform === "PC (Windows)" ? <S.WindowsIcon /> : <S.BrowserIcon />}
    </S.Container>
  );
}
