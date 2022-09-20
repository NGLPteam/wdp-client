import * as Styled from "./Switch.styles";

type Props = {
  options: { label: string; value: string }[];
  onClick: (val: string) => void;
  active: string;
};

export default function Switch({ options, active, onClick }: Props) {
  return (
    <Styled.Wrapper>
      {options.map((option) => (
        <Styled.SwitchButton
          key={option.value}
          $active={option.value === active}
          aria-disabled={option.value === active}
          onClick={() => onClick(option.value)}
        >
          {option.label}
        </Styled.SwitchButton>
      ))}
    </Styled.Wrapper>
  );
}
