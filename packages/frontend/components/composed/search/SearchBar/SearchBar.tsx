import React, { forwardRef, Ref } from "react";
import { useTranslation } from "react-i18next";
import * as Styled from "./SearchBar.styles";
import { IconFactory } from "components/factories";

type InputProps = Pick<React.HTMLProps<HTMLInputElement>, "defaultValue">;

function SearchBar(
  { id, ...inputProps }: Props & InputProps,
  ref: Ref<HTMLInputElement>
) {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <Styled.Label htmlFor={id}>
        <IconFactory icon="search" role="presentation" />
        <span className="a-hidden">{t("search.label")}</span>
      </Styled.Label>
      <Styled.Input
        id={id}
        type="search"
        placeholder={t("search.placeholder")}
        ref={ref}
        {...inputProps}
      />
      <Styled.Button type="submit">
        <IconFactory icon="arrowRight" role="presentation" />
        <span className="a-hidden">{t("search.submit")}</span>
      </Styled.Button>
    </Styled.Wrapper>
  );
}

export default forwardRef(SearchBar);

interface Props {
  id: string;
}
