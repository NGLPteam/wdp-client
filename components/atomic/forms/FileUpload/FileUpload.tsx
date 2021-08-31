/* eslint-disable */
import React, { useCallback, useEffect, useRef, useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { FieldValues, Path, PathValue, Validate } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Image } from "components/atomic";
import { IconFactory } from "components/factories";

import useLazyRef from "hooks/useLazyRef";
import useLatest from "hooks/useLatest";
import useUppy from "hooks/useUppy";

import BaseInputWrapper from "../BaseInputWrapper";
import type InputProps from "../inputType";

import * as Styled from "./FileUpload.styles";
import ProgressBar from "./ProgressBar";
import useUploadReducer from "./useUploadReducer";

import type {
  ActiveUpload,
  ActiveUploadRef,
  State as UploadState,
} from "./types";

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
  existingValue,
  ...inputProps
}: Props<T>) {
  const uppy = useUppy();

  const { t } = useTranslation("common");

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

  const { state, fileInputRef, selectFile } = useUploadReducer({ uppy });

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

  const renderImage = useMemo(() => {
    return () => {
      if (!image) return null;
      const { png } = image;
      if (!png) return null;
      const width = 100;
      const height = 100;
      const objectFit = "contain";
      const alt = png.alt ? png.alt : t("forms.file.missingAlt");
      return (
        <Image image={{ ...png, alt, width, height }} objectFit={objectFit} />
      );
    };
  }, []);

  return (
    <BaseInputWrapper hideLabel={hideLabel} label={label} name={name}>
      {({ uid }) => (
        <Styled.Wrapper>
          <Styled.FileInput
            id={uid}
            name={field.name}
            ref={setRefs}
            type="file"
            onBlur={field.onBlur}
            onChange={selectFile}
            multiple={false}
            {...inputProps}
          />
          <IconFactory icon="upload" size="lg" />
          <Styled.UploadText>{t("forms.file.upload")}</Styled.UploadText>
          <ProgressBar
            active={state.active}
            percentUploaded={state.percentUploaded}
          />
          <UploadStatus state={state} />
          {renderImage()}
        </Styled.Wrapper>
      )}
    </BaseInputWrapper>
  );
}

export interface Png {
  alt: string;
  url: string;
}

export interface Image {
  png?: Png | null;
}

export interface Props<T extends FieldValues = FieldValues>
  extends InputProps<T> {
  accept?: string;
  name: Path<T>;
  image?: Image | null;
  existingValue?: Boolean;
}

function UploadStatus({ state: { file, upload } }: UploadStatusProps) {
  if (!file || !upload) {
    return null;
  }

  return (
    <Styled.UploadList>
      <li>{file.name}</li>
    </Styled.UploadList>
  );
}

interface UploadStatusProps {
  state: UploadState;
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
