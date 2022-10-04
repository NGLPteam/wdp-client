import { useTranslation } from "react-i18next";
import * as Styled from "./Switch.styles";

type Props = {
  options: { label: string; value: string }[];
  onClick: (val: string) => void;
  active: string;
};

export default function Switch({ options, active, onClick }: Props) {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      {options.map((option) => (
        <Styled.SwitchButton
          key={option.value}
          $active={option.value === active}
          disabled={option.value === active}
          aria-disabled={option.value === active}
          tabIndex={option.value === active ? -1 : 0}
          onClick={() => onClick(option.value)}
        >
          {t(option.label)}
        </Styled.SwitchButton>
      ))}
    </Styled.Wrapper>
  );
}
