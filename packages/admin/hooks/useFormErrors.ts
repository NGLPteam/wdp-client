import { useFormState } from "react-hook-form";

export default function useFormErrors() {
  const { errors } = useFormState();

  return errors;
}
