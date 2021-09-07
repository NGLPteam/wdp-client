import { useCallback } from "react";
import toast from "react-hot-toast";

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

  return { debug, info, warn, success, error, fatal };
}
