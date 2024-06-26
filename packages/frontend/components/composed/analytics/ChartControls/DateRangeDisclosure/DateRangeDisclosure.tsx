import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { IconFactory } from "components/factories";
import * as Styled from "./DateRangeDisclosure.styles";
import type { MaybeButtonRef } from "@castiron/common-types";

type Props = {
  active: string;
};

const DateRangeDisclosure = (
  { active, ...props }: Props,
  ref: MaybeButtonRef,
) => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper ref={ref} {...props}>
      <Styled.TextWrapper>
        <Styled.Label>{t("analytics.date_ranges.dropdown_label")}</Styled.Label>
        <Styled.Selected>
          {t(`analytics.date_ranges.${active}`)}
        </Styled.Selected>
      </Styled.TextWrapper>
      <IconFactory icon="chevronDown" role="presentation" />
    </Styled.Wrapper>
  );
};

export default forwardRef(DateRangeDisclosure);
