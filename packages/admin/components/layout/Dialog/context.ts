"use client";

import useDialog from "@castiron/hooks/useDialog";
import { createContext, useContext } from "react";

type ContextType = ReturnType<typeof useDialog>;

const DialogContext = createContext<ContextType | null>(null);

export default DialogContext;

export function useDialogContext() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error(
      `Dialog components cannot be rendered outside the Dialog.Provider component.`,
    );
  }
  return context;
}
