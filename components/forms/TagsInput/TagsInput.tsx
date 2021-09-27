import React, { Ref, forwardRef, useState, useEffect } from "react";
import { IconFactory } from "components/factories";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./TagsInput.styles";

import type InputProps from "../inputType";
import TagsInputAdd from "./TagsInputAdd";

/**
 * Add and remove tags
 */
const TagsInput = forwardRef(
  (
    {
      label,
      name,
      hideLabel,
      description,
      placeholder,
      required,
      onChange,
      value,
      ...inputProps
    }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const [tags, setTags] = useState<Tags>(value);

    // Pass the selected value back up to react-hook-forms' onChange
    useEffect(() => {
      if (onChange) onChange(tags || []);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tags]); // Only run on tags change

    // Add a tag
    const handleAdd = (newTag: string) => {
      const currentTags = tags || [];
      if (newTag && !currentTags.includes(newTag)) {
        setTags([...currentTags, newTag]);
      }
    };

    // Remove a tag
    const handleRemove = (removeTag: string) => {
      const currentTags = tags || [];
      if (currentTags.includes(removeTag)) {
        const newTags = currentTags.filter((tag) => tag !== removeTag);
        setTags([...newTags]);
      }
    };

    return (
      <BaseInputWrapper
        name={name}
        hideLabel={hideLabel}
        label={label}
        required={required}
      >
        <>
          <div>
            {/* Hidden input field for react-hook-form or other form control */}
            <input
              hidden
              ref={ref}
              name={name}
              required={required}
              defaultValue={tags}
              {...inputProps}
            />
            {/* Visible input field for typeahead functionality */}
            <TagsInputAdd placeholder={placeholder} onEnter={handleAdd} />
          </div>
          {tags && (
            <Styled.SelectedList>
              {tags.map((tag, index) => (
                <Styled.SelectedItem key={`selected-item-${index}`}>
                  <Styled.SelectedText>{tag}</Styled.SelectedText>
                  <Styled.RemoveSelectedButton
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(tag);
                    }}
                  >
                    <IconFactory icon="close" />
                  </Styled.RemoveSelectedButton>
                </Styled.SelectedItem>
              ))}
            </Styled.SelectedList>
          )}
        </>
      </BaseInputWrapper>
    );
  }
);

type Tags = string[] | undefined;

interface Props extends InputProps {
  /** Returns the current selected value */
  onChange?: (value: Tags) => void;
  /** Default value */
  value?: Tags;
}

export default TagsInput;
