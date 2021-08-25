import type { MutableRefObject } from "react";
import type { UploadResult } from "uppy/@core";
import type { UploadedFileInput } from "types/graphql-schema";

/**
 * The various actions the UploadReducer can take.
 */
type Action =
  | { type: "select"; file: File }
  | { type: "start"; fileID: string }
  | { type: "progress"; progress: Progress }
  | { type: "success"; fileID: string; upload: UploadedFileInput }
  | { type: "deselect" }
  | { type: "reset" };

export type ActiveUpload = Promise<UploadResult<AssetMeta>>;

export type ActiveUploadRef = MutableRefObject<ActiveUpload>;

export type AssetMeta = Record<string, unknown>;

/**
 * An object from Uppy that denotes the progress of an individual upload.
 */
export interface Progress {
  bytesUploaded: number;
  bytesTotal: number;
}

export interface State {
  /**
   * Whether an upload is currently in progress.
   */
  active: boolean;
  /**
   * An actual file instance from `<input type="file" />`.
   */
  file: File | null;
  /**
   * A fileID is set by Uppy and is used for keeping track
   * of individual uploads within the instance.
   */
  fileID: string | null;
  /**
   * Incremented by the upload-progress event in Uppy.
   */
  percentUploaded: number | null;
  /**
   * A prepared result upon upload-success firing in Uppy
   */
  upload: UploadedFileInput | null;
}
