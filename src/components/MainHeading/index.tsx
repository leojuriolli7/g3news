import * as S from "./styles";

interface MainHeadingProps {
  title: string;
  description: string;
}

export function MainHeading({ title, description }: MainHeadingProps) {
  return (
    <S.Container>
      <S.ListTitle>{title}</S.ListTitle>
      <S.ListDescription>{description}</S.ListDescription>
    </S.Container>
  );
}
