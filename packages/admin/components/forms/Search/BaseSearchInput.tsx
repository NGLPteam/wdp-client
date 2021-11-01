import React from "react";
import { useUID } from "react-uid";
import CICInput from "@castiron/components-input";
import { IconFactory } from "components/factories";
import { useTranslation } from "react-i18next";

function SearchInput({ className, inputRef }: Props) {
  const uid = useUID();
  const { t } = useTranslation();

  const labelProps = {
    className: "a-hidden",
  };

  const inputProps = {
    className: `${className}__input a-focus-dark`,
    placeholder: t("search"),
    ref: inputRef,
  };

  return (
    <div className={className}>
      <IconFactory icon="search" className={`${className}__icon`} />
      <CICInput
        type="search"
        inputId={uid}
        label={t("search")}
        inputProps={inputProps}
        labelProps={labelProps}
      />
    </div>
  );
}

interface Props {
  className?: string;
  inputRef?: React.MutableRefObject<HTMLInputElement | undefined>;
}

export default SearchInput;
