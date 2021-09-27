import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useUID } from "react-uid";
import * as Styled from "./TagsInput.styles";

const TagsInputAdd = ({ placeholder, onEnter }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation();
  const uID = useUID();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleAdd();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAdd();
      e.preventDefault();
    }
  };

  const handleAdd = () => {
    if (onEnter && inputRef?.current?.value) {
      onEnter(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <label htmlFor={uID} className="a-hidden">
        {t("forms.tags.enter")}
      </label>
      <Styled.Input
        id={uID}
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        onClick={handleClick}
        className="a-hidden"
        aria-controls={uID}
      >
        {t("forms.tags.add")}
      </button>
    </>
  );
};

interface Props {
  placeholder?: string;
  onEnter: (string: string) => void;
}

export default TagsInputAdd;
