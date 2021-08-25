/* eslint-disable */
import { useCallback, useEffect, useReducer, useRef } from "react";
import type { ChangeEventHandler, Dispatch, MutableRefObject } from "react";
import clamp from "lodash/clamp";

import type {
  Uppy,
  UppyFile,
  UploadCompleteCallback,
  UploadSuccessCallback,
} from "@uppy/core";

import type { UploadedFileInput } from "types/graphql-schema";

import type { Action, AssetMeta, Progress, State } from "./types";

/**
 * A `useReducer` hook that keeps track of important state related
 * to in-progress uploads.
 */
export default function useUploadReducer({
  uppy,
}: UploadReducerOptions): UploadReducerReturn {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);

  const fileInputRef = useWatchUppy(dispatch, uppy);

  const selectFile = useCallback(function (event) {
    event.stopPropagation();

    const file = event?.target?.files?.item(0) ?? null;

    if (file) {
      dispatch({ type: "select", file });
    } else {
      dispatch({ type: "deselect" });
    }
  }, []);

  useEffect(
    function startUpload() {
      let fileID: string | undefined;

      if (state.file) {
        try {
          fileID = uppy.addFile<AssetMeta>({
            source: "file input",
            name: state.file.name,
            type: state.file.type,
            data: state.file,
          });

          dispatch({ type: "start", fileID });
        } catch (err) {
          if (err.isRestriction) {
            // handle restrictions
            console.warn("Restriction error:");
            console.error(err);
          } else {
            // handle other errors
            console.error(err);
          }
        }
      }

      // If we change the selected file, we should remove the ID from uppy,
      // since we are only handling 1 upload.
      return function maybeRemove() {
        if (fileID) {
          uppy.removeFile(fileID);
        }
      };
    },
    [state.file]
  );

  return { state, dispatch, fileInputRef, selectFile };
}

interface UploadReducerReturn {
  state: State;
  dispatch: Dispatch<Action>;
  selectFile: ChangeEventHandler<HTMLInputElement>;
  fileInputRef: FileInputRef;
}

type FileInputRef = MutableRefObject<HTMLInputElement | undefined>;

/**
 * A hook that sets up various event handlers with the provided uppy instance,
 * monitors upload progress, and clears the file input on successful uploads.
 *
 * It also sets up a ref that needs to be attached to the file input.
 */
function useWatchUppy(dispatch: Dispatch<Action>, uppy: Uppy<"strict">) {
  const fileInputRef = useRef<HTMLInputElement>();

  useEffect(function addUppyEvents() {
    const onUploadComplete: UploadCompleteCallback<AssetMeta> = (result) => {
      if (result.successful[0] && fileInputRef.current) {
        // We successfully uploaded something, now clear the file input
        fileInputRef.current.value = "";
      }
    };

    const onUploadProgress = (file: UppyFile, progress: Progress) => {
      dispatch({ type: "progress", progress });
    };

    const onUploadSuccess: UploadSuccessCallback<AssetMeta> = (
      file,
      body: { uploadURL?: string }
    ) => {
      const { uploadURL } = body;

      if (!uploadURL) {
        // This shouldn't happen, but just in case:

        throw new Error("Did not receive uploadURL");
      }

      const upload = toFileUpload(file, uploadURL);

      dispatch({ type: "success", fileID: file.id, upload });
    };

    uppy.on("upload-complete", onUploadComplete);

    uppy.on("upload-progress", onUploadProgress);

    uppy.on("upload-success", onUploadSuccess);

    return function removeUppyEvents() {
      uppy.off("upload-complete", onUploadComplete);
      uppy.off("upload-progress", onUploadProgress);
      uppy.off("upload-success", onUploadSuccess);
    };
  }, []);

  return fileInputRef;
}

interface UploadReducerOptions {
  uppy: Uppy<"strict">;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "select":
      return {
        ...state,
        file: action.file,
        fileID: null,
        upload: null,
      };
    case "start":
      return {
        ...state,
        active: true,
        fileID: action.fileID,
        percentUploaded: 0,
      };
    case "progress":
      return {
        ...state,
        percentUploaded: calculatePercentUploaded(action.progress),
      };
    case "success":
      if (action.fileID === state.fileID) {
        return { ...state, active: false, upload: action.upload };
      } else {
        // We've changed files since, ignore this action
        return state;
      }
    case "reset":
      return initialState();
    case "deselect":
      return initialState();
  }
};

const initialState = (): State => ({
  active: false,
  file: null,
  // The ID associated with uppy
  fileID: null,
  percentUploaded: null,
  upload: null,
});

function calculatePercentUploaded(progress?: Progress): number | null {
  if (!progress) {
    return null;
  }

  const { bytesUploaded, bytesTotal } = progress;

  const ratio = bytesUploaded / bytesTotal;

  const rounded = Math.round((ratio + Number.EPSILON) * 100) / 100;

  return clamp(rounded * 100, 0, 100);
}

function toFileUpload(
  file: UppyFile<AssetMeta>,
  uploadURL: string
): UploadedFileInput {
  const input: UploadedFileInput = {
    id: uploadURL,
    storage: "CACHE",
  };

  if (file.name || file.type) {
    input.metadata = {};

    if (file.name) {
      input.metadata.filename = file.name;
    }

    if (file.type) {
      input.metadata.mimeType = file.type;
    }
  }

  return input;
}
