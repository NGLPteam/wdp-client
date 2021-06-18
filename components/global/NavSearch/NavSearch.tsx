import React, { useRef } from "react";
import get from "lodash/get";
import * as Styled from "./NavSearch.styles";

function NavSearch({ className, onSubmit }: Props) {
  const inputRef = useRef();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = get(inputRef, "current.value", "");
    if (onSubmit) {
      onSubmit(value);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <Styled.SearchInput inputRef={inputRef} />
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
