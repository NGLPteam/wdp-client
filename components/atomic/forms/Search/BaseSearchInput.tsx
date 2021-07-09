import React from "react";
import { useUID } from "react-uid";
import CICInput from "@castiron/components-input";
import { IconFactory } from "components/factories";

function SearchInput({ className, inputRef }: Props) {
  const uid = useUID();

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
        inputId={uid}
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
