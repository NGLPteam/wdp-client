import React, { useRef } from "react";
import get from "lodash/get";
import { useTranslation } from "react-i18next";
import * as Styled from "./Search.styles";

function Search({ className, onSubmit }: Props) {
  const inputRef = useRef<HTMLInputElement>();

  const { t } = useTranslation();

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
        {t("search.submit")}
      </button>
    </form>
  );
}

interface Props {
  className?: string;
  onSubmit: (value: string) => void;
}

export default Search;
