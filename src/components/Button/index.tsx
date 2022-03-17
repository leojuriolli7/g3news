import * as S from "./styles";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  color: string;
}

export function Button({ text, onClick, type, color }: ButtonProps) {
  return (
    <S.Button onClick={onClick} type={type} color={color}>
      {text}
    </S.Button>
  );
}
