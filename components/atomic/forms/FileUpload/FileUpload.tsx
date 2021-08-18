import React, { forwardRef, Ref, useCallback, useState } from "react";
import { IconFactory } from "components/factories";
import BaseInputWrapper from "../BaseInputWrapper";
import * as Styled from "./FileUpload.styles";

import type InputProps from "../inputType";
import { useTranslation } from "react-i18next";

const FILE_LIST_LIMIT = 3;

/**
 * A very basic file uploader
 */
const FileUpload = forwardRef(
  (
    { label, hideLabel, description, onChange, error, ...inputProps }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    const [files, setFiles] = useState([]);
    const { t } = useTranslation("common");

    // Get the list of files for display
    // Pass the on change value up to the parent function
    const handleChange = useCallback(
      (o) => {
        const files = o.target.files;
        if (onChange) onChange(o);
        setFiles(Array.from(files));
      },
      [onChange]
    );

    return (
      <BaseInputWrapper hideLabel={hideLabel} label={label} error={error}>
        {({ uid }) => (
          <Styled.Wrapper>
            <Styled.FileInput
              id={uid}
              ref={ref}
              type="file"
              onChange={handleChange}
              {...inputProps}
            />
            <IconFactory icon="upload" size="lg" />
            <Styled.UploadText>{t("forms.file.upload")}</Styled.UploadText>
            {files && files.length > 0 && (
              <Styled.UploadList>
                {files
                  .slice(0, FILE_LIST_LIMIT)
                  .map((file: { name: string }, i) => (
                    <li key={i}>{file.name}</li>
                  ))}
                {files.length > FILE_LIST_LIMIT && (
                  <li>
                    {t("forms.file.count", {
                      count: files.length - FILE_LIST_LIMIT,
                    })}
                  </li>
                )}
              </Styled.UploadList>
            )}
          </Styled.Wrapper>
        )}
      </BaseInputWrapper>
    );
  }
);

interface Props extends InputProps {
  multiple?: boolean;
  accept?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (o: any) => void;
}

export default FileUpload;
