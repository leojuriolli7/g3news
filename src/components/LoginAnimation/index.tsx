import joystick from "../../assets/gamepad.svg";
import * as S from "./styles";

export function LoginAnimation() {
  return (
    <S.ImageContainer>
      <S.Image src={joystick} />
    </S.ImageContainer>
  );
}
