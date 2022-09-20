import { useTranslation } from "react-i18next";
import * as Styled from "./StatBlock.styles";

type Props = {
  stat: string | number;
  label: string;
};

export default function StatBlock({ stat, label }: Props) {
  const { t } = useTranslation();

  return (
    <Styled.Outer>
      <Styled.Stat>{stat}</Styled.Stat>
      <Styled.Label>{t(label)}</Styled.Label>
    </Styled.Outer>
  );
}
