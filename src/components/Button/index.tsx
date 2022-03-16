import * as S from "./styles";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({ text, onClick, type }: ButtonProps) {
  return (
    <S.Button onClick={onClick} type={type}>
      {text}
    </S.Button>
  );
}
