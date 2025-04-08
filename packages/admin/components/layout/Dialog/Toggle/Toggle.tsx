import { cloneElement, useCallback } from "react";
import { useDialogContext } from "../context";

type Props = Omit<
  React.PropsWithoutRef<React.HTMLProps<HTMLButtonElement>>,
  "onClick" | "type"
> & {
  children: React.ReactNode;
};

export default function Toggle({ children, ...props }: Props) {
  const { toggleRef, onToggleClick } = useDialogContext();

  const handleToggleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onToggleClick();
    },
    [onToggleClick],
  );

  return cloneElement(children as React.ReactElement, {
    ...props,
    ref: toggleRef,
    onClick: handleToggleClick,
  });
}
