import React, { useRef } from "react";
import CICInput from "@castiron/components-input";
import { IconFactory } from "components/factories";
import get from "lodash/get";

function NavSearch({ className, onSubmit }: Props) {
  const inputEl = useRef();

  const labelProps = {
    className: "a-hidden",
  };

  const inputProps = {
    className: `${className}__input a-focus-dark`,
    placeholder: "Search",
    ref: inputEl,
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = get(inputEl, "current.value", "");
    if (onSubmit) {
      onSubmit(value);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <IconFactory icon="search" className={`${className}__icon`} />
      <CICInput
        type="search"
        inputId="search"
        label="Search"
        inputProps={inputProps}
        labelProps={labelProps}
      />
      <button className="a-hidden" type="submit">
        Submit Search
      </button>
    </form>
  );
}

interface Props {
  className?: string;
  onSubmit: (value: string) => void;
}

export default NavSearch;
