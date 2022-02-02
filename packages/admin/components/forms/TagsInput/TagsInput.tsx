import React, { Ref, forwardRef, useState, useEffect } from "react";
import BaseInputWrapper from "../BaseInputWrapper";

import type InputProps from "../inputType";
import BaseArrayList, { BaseArrayListItem } from "../BaseArrayList";
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
      isWide,
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
        isWide={isWide}
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
            <BaseArrayList>
              {tags.map((tag, index) => (
                <BaseArrayListItem
                  key={`tag-${index}`}
                  onRemove={() => {
                    handleRemove(tag);
                  }}
                >
                  {tag}
                </BaseArrayListItem>
              ))}
            </BaseArrayList>
          )}
        </>
      </BaseInputWrapper>
    );
  }
);

type Tags = string[] | undefined;

interface Props extends Omit<InputProps, "onChange"> {
  /** Returns the current selected value */
  onChange?: (value: Tags) => void;
  /** Default value */
  value?: Tags;
}

export default TagsInput;
