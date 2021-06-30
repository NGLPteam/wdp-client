import React from "react";
import CICInput from "@castiron/components-input";
import { IconFactory } from "components/factories";

function SearchInput({ className, inputRef }: Props) {
  const labelProps = {
    className: "a-hidden",
  };

  const inputProps = {
    className: `${className}__input a-focus-dark`,
    placeholder: "Search",
    ref: inputRef,
  };

  return (
    <div className={className}>
      <IconFactory icon="search" className={`${className}__icon`} />
      <CICInput
        type="search"
        inputId="search"
        label="Search"
        inputProps={inputProps}
        labelProps={labelProps}
      />
    </div>
  );
}

interface Props {
  className?: string;
  inputRef: React.RefObject<HTMLInputElement>;
  isDark?: boolean;
}

export default SearchInput;
