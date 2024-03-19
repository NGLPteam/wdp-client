import { useCallback } from "react";
import toast from "react-hot-toast";
import type { MutationGlobalError } from "types/graphql-schema";

export default function useNotify() {
  const debug = useCallback((msg: string) => {
    toast(msg);
  }, []);

  const info = useCallback((msg: string) => {
    toast(msg);
  }, []);

  const success = useCallback((msg: string) => {
    toast.success(msg);
  }, []);

  const error = useCallback((msg: string) => {
    toast.error(msg);
  }, []);

  const mutationGlobalError = useCallback(
    (errors: Readonly<MutationGlobalError[]>) => {
      errors.forEach((e) => error(e.message));
    },
    [error],
  );

  return {
    debug,
    info,
    success,
    error,
    mutationGlobalError,
  };
}
