import { useTranslation } from "react-i18next";
import * as Styled from "./StatBlock.styles";

type Props = {
  stat: string | number;
  label: string;
  headingLevel?: 1 | 3;
};

export default function StatBlock({ stat, label, headingLevel = 1 }: Props) {
  const { t } = useTranslation();

  return (
    <Styled.Outer>
      <Styled.Label>{t(label)}</Styled.Label>
      <Styled.Stat $level={headingLevel}>{stat}</Styled.Stat>
    </Styled.Outer>
  );
}
