import { useEffect, useMemo } from "react";
import { useUID } from "react-uid";
import Uppy from "@uppy/core";
import Tus, { TusOptions } from "@uppy/tus";

import useLazyRef from "./useLazyRef";
import { useViewerContext } from "contexts";

const CHUNK_SIZE = 5 * 1024 * 1024; // 5 megabytes, the max amount S3 supports for multipart uploading

export default function useUppy(): Uppy.Uppy<"strict"> {
  const id = useUID();

  const headers = useGetHeaders();

  const uppy = useLazyRef<UppyInstance>(() =>
    buildUppyInstance({ headers, id })
  );

  useEffect(
    function updateUploadHeaders() {
      // If our headers change (rarely), we want to update the Tus plugin
      // so that will not try to send with an old token.
      const tus = uppy.getPlugin("Tus") as Uppy.Plugin<TusOptions> & {
        opts?: TusOptions;
      };

      if (tus) {
        if (tus.opts?.headers !== headers) {
          tus.setOptions({ headers });
        }
      }
    },
    [headers, uppy]
  );

  useEffect(
    function () {
      // On unmount, we want to close up the uppy instance.
      return function closeUppy() {
        uppy.close();
      };
    },
    [uppy]
  );

  return uppy;
}

interface BuildOptions {
  headers: Headers;
  id: string;
}

/**
 * We don't know these until we have loaded the user session
 */
type Headers = Record<string, string>;

type UppyInstance = Uppy.Uppy<"strict">;

function buildUppyInstance({ headers }: BuildOptions): UppyInstance {
  const uppy = Uppy<Uppy.StrictTypes>({
    autoProceed: false,
    restrictions: {
      maxNumberOfFiles: 1,
    },
  }).use(Tus, {
    endpoint: process.env.NEXT_PUBLIC_TUS_URL,
    chunkSize: CHUNK_SIZE,
    headers,
  });

  return uppy;
}

/**
 * Attach the uploadToken to the headers, if necessary.
 */
function useGetHeaders(): Headers {
  const { uploadToken } = useViewerContext();

  return useMemo<Headers>(
    function () {
      const headers: Headers = {};

      if (uploadToken) {
        headers["Upload-Token"] = uploadToken;
      }

      return headers;
    },
    [uploadToken]
  );
}
