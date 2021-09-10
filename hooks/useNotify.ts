import { useCallback } from "react";
import toast from "react-hot-toast";
import type { MutationGlobalError } from "types/graphql-schema";

export default function useNotify() {
  const debug = useCallback((msg) => {
    toast(msg);
  }, []);

  const info = useCallback((msg) => {
    toast(msg);
  }, []);

  const warn = useCallback((msg) => {
    toast(msg);
  }, []);

  const success = useCallback((msg) => {
    toast.success(msg);
  }, []);

  const error = useCallback((msg) => {
    toast.error(msg);
  }, []);

  const fatal = useCallback((msg) => {
    toast.error(msg);
  }, []);

  const mutationGlobalError = useCallback(
    (errors: Readonly<MutationGlobalError[]>) => {
      const msg = errors.map((e) => e.message).join("  ");
      error(msg);
    },
    [error]
  );

  return { debug, info, warn, success, error, fatal, mutationGlobalError };
}
