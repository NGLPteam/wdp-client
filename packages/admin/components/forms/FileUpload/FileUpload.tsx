/* eslint-disable */
import React, {
  useCallback,
  useEffect,
  useRef,
  useMemo,
  useState,
  forwardRef,
} from "react";
import { useController, useFormContext } from "react-hook-form";
import type { FieldValues, Path, PathValue, Validate } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { maybeSetBooleanField } from "helpers/forms";

import useLazyRef from "hooks/useLazyRef";
import useLatest from "@wdp/lib/hooks/useLatest";
import useUppy from "hooks/useUppy";

import { ProgressBar } from "components/atomic";
import BaseInputWrapper from "../BaseInputWrapper";
import type InputProps from "../inputType";

import * as Styled from "./FileUpload.styles";
import FileUploadPreview from "./FileUploadPreview";
import type { Image as ImageType } from "./FileUploadCurrent";
import useUploadReducer from "./useUploadReducer";

import type {
  ActiveUpload,
  ActiveUploadRef,
  State as UploadState,
} from "./types";
import FileUploadEmpty from "./FileUploadEmpty";
import FileUploadCurrent from "./FileUploadCurrent";
import type { BooleanPath } from "types/form-fields";
import { AssetKind } from "types/graphql-schema";

/**
 * A file input that integrates with the tus.io endpoint on the API.
 *
 * It will automatically upload a file in the background and then set
 * the reference to the file within the parent form context.
 *
 * It requires the TFieldValues for the current form context to be provided.
 *
 * @see useUppy
 * @see https://tus.io
 * @see https://uppy.io/docs/tus/
 * @todo We should add some sort of noop functionality for use with storybook. Right now it will just fail.
 */
export default function FileUpload<T extends FieldValues = FieldValues>({
  name,
  label,
  hideLabel,
  description,
  error,
  required,
  image,
  kind,
  fileSize,
  clearName,
  isWide,
  ...inputProps
}: Props<T>) {
  const [isCleared, setIsCleared] = useState(false);

  const uppy = useUppy();

  const { t } = useTranslation();

  const { uploadRef, uploaded } = useWaitForUpload<T>(name, { required });

  const { control, register, setValue, trigger } = useFormContext<T>();

  // Needed in order to make this register with its parent form
  register(name);

  const { field } = useController<T, typeof name>({
    control,
    name,
    rules: {
      validate: {
        uploaded,
      },
    },
  });

  const { state, dispatch, fileInputRef, selectFile } = useUploadReducer({
    uppy,
  });

  const changeRef = useLatest(field.onChange);
  const setRef = useLatest(field.ref);

  const setRefs = useLazyRef<(instance: HTMLInputElement) => void>(
    () => (instance: HTMLInputElement) => {
      fileInputRef.current = instance;

      setRef.current(instance);
    }
  );

  useEffect(
    function waitForUpload() {
      if (state.fileID) {
        uploadRef.current = uppy.upload();

        // Activate validator
        trigger(name);
      }
    },
    [name, state.fileID]
  );

  useEffect(
    function watchUpload() {
      changeRef.current(state.upload ?? undefined);
    },
    [name, state.upload, setValue]
  );

  function handleClear() {
    setIsCleared(true);
    maybeSetBooleanField(setValue, clearName, true);
    if (state.file) dispatch({ type: "deselect" });
  }

  function handleSelect(e: React.ChangeEvent<HTMLInputElement>) {
    selectFile(e);
    setIsCleared(false);
    maybeSetBooleanField(setValue, clearName, false);
  }

  return (
    <>
      <BaseInputWrapper
        hideLabel={hideLabel}
        label={label}
        name={name}
        required={required}
        isWide={isWide}
        description={description}
      >
        {({ uid }) => (
          <Styled.Wrapper aria-live="polite">
            <Styled.Inner>
              <Styled.FileInput
                id={uid}
                name={field.name}
                ref={setRefs}
                type="file"
                onBlur={field.onBlur}
                onChange={handleSelect}
                multiple={false}
                {...inputProps}
              />
              {(kind || image?.png?.url) && !isCleared && !state.file ? (
                <>
                  <FileUploadCurrent
                    image={image}
                    kind={kind}
                    fileSize={fileSize}
                  />
                  {clearName && (
                    <Styled.RemoveButton onClick={handleClear} type="button">
                      {t("forms.file.remove")}
                    </Styled.RemoveButton>
                  )}
                  <Styled.UploadText>
                    {t(
                      clearName
                        ? "forms.file.or_upload_new"
                        : "forms.file.upload_new"
                    )}
                  </Styled.UploadText>
                </>
              ) : state.file ? (
                <>
                  <FileUploadPreview
                    file={state.file}
                    isLoading={state.active}
                  />
                  <Styled.RemoveButton onClick={handleClear} type="button">
                    {t("forms.file.remove")}
                  </Styled.RemoveButton>
                  <Styled.UploadText>
                    {t("forms.file.upload_new")}
                  </Styled.UploadText>
                </>
              ) : (
                <>
                  <FileUploadEmpty />
                  <Styled.UploadText>
                    {t("forms.file.upload")}
                  </Styled.UploadText>
                </>
              )}
            </Styled.Inner>
            <ProgressBar
              loading={state.active}
              percentLoaded={state.percentUploaded}
            />
          </Styled.Wrapper>
        )}
      </BaseInputWrapper>
    </>
  );
}

export interface Props<T extends FieldValues = FieldValues>
  extends Omit<InputProps<T>, "onChange"> {
  /** Type accepted by file input */
  accept?: string;
  /** Name for the file input */
  name: Path<T>;
  /** Name for hidden clear input */
  clearName?: BooleanPath<T>;
  /** Current image */
  image?: ImageType | null;
  /** The asset kind: image, audio, etc */
  kind?: AssetKind;
  fileSize?: number;
}

function useWaitForUpload<T extends FieldValues>(
  name: Path<T>,
  options: ValidationOptions
): WaitForUploadReturn<T> {
  const uploadRef = useActiveUploadRef();

  const uploaded = useValidateUpload<T>(name, uploadRef, options);

  return { uploadRef, uploaded };
}

interface WaitForUploadReturn<T extends FieldValues> {
  uploadRef: ActiveUploadRef;
  uploaded: Validate<PathValue<T, Path<T>>>;
}

function useActiveUploadRef(): ActiveUploadRef {
  return useRef<ActiveUpload>(Promise.resolve({ successful: [], failed: [] }));
}

function useValidateUpload<T extends FieldValues>(
  name: Path<T>,
  uploadRef: ActiveUploadRef,
  options: ValidationOptions
): Validate<PathValue<T, Path<T>>> {
  return useCallback(
    async function (value) {
      try {
        const { successful, failed } = await uploadRef.current;

        if (failed.length) {
          return `Upload Failed (check console for now)`;
        } else if (options.required && successful.length === 0 && !value) {
          return `Please specify a file`;
        }
      } catch (err) {
        console.error(err);

        return `Something went wrong with the upload request`;
      }

      // We're valid
      return true;
    },
    [options.required]
  );
}

interface ValidationOptions {
  required?: boolean;
}
