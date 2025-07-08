import { useId } from "react";
import { useTranslation } from "react-i18next";
import BaseInputLabel from "components/forms/BaseInputLabel";
import * as Styled from "./MockInput.styles";

export default function MockInput({
  description,
  descriptionTop,
  hideLabel,
  label,
  isWide,
  value,
}: Props) {
  const { t } = useTranslation();
  const uid = useId();
  // Setting the width this way creates a small extra class that's applied for wide wrappers
  // This prevents the Styled.Wrapper CSS from getting duplicated for a single width change
  const css = isWide && {
    "flex-basis": "var(--form-grid-item-width-wide)",
  };

  return (
    <Styled.Wrapper css={css}>
      <BaseInputLabel htmlFor={uid} $hideLabel={hideLabel}>
        {t(label)}
      </BaseInputLabel>
      {description && descriptionTop && (
        <Styled.Description $descriptionTop={descriptionTop}>
          {typeof description === "string" ? t(description) : description}
        </Styled.Description>
      )}
      {typeof value === "function" ? (
        value()
      ) : (
        <Styled.Input id={uid}>{value}</Styled.Input>
      )}
      {description && !descriptionTop && (
        <Styled.Description>
          {typeof description === "string" ? t(description) : description}
        </Styled.Description>
      )}
    </Styled.Wrapper>
  );
}

interface Props {
  isWide?: boolean;
  descriptionTop?: boolean;
  description?: string;
  hideLabel?: boolean;
  label: string;
  value?: React.ReactNode | (() => React.JSX.Element) | null;
}
