import React, { Ref, forwardRef, useState, useCallback } from "react";
import { createEditor } from "slate";
import type { Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import type InputProps from "../inputType";
import BaseInputWrapper from "../BaseInputWrapper";
import FormatButton from "./FormatButton";
import * as Styled from "./RichTextarea.styles";
import SlateLeaf from "./SlateLeaf";
import SlateElement from "./SlateElement";
import ElementButton from "./ElementButton";
import { CustomElement } from "./types";

const RichTextarea = forwardRef(
  (
    {
      label,
      name,
      hideLabel,
      description,
      placeholder,
      error,
      isWide,
      value: initialValue,
      onChange,
      ...textareaProps
    }: InputProps & {
      value: string;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: Ref<HTMLTextAreaElement>
  ) => {
    // Change to JSON.parse(initialValue) when API is updated
    const initialElement: CustomElement[] = [
      {
        type: "paragraph",
        children: [{ text: initialValue || "" }],
      },
    ];

    const [value, setValue] = useState<Descendant[]>(initialElement);

    const [editor] = useState(() => withReact(createEditor()));

    const renderElement = useCallback(
      (props) => <SlateElement {...props} />,
      []
    );

    const renderSlateLeaf = useCallback(
      (props) => <SlateLeaf {...props} />,
      []
    );

    const handleChange = useCallback(
      (value: Descendant[]) => {
        setValue(value);
        onChange(JSON.stringify(value));
      },
      [setValue, onChange]
    );

    return value ? (
      <BaseInputWrapper
        name={name}
        hideLabel={hideLabel}
        label={label}
        required={textareaProps.required}
        isWide={isWide}
      >
        <Styled.Editor>
          <Slate editor={editor} value={value} onChange={handleChange}>
            <Styled.Toolbar>
              <FormatButton format="bold" icon="bold" />
              <FormatButton format="italic" icon="italic" />
              <ElementButton format="ul-list" icon="unorderedList" />
            </Styled.Toolbar>
            <Editable
              className="t-rte"
              renderElement={renderElement}
              renderLeaf={renderSlateLeaf}
            />
          </Slate>
        </Styled.Editor>
      </BaseInputWrapper>
    ) : null;
  }
);

export default RichTextarea;
