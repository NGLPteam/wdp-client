import useDialog from "@castiron/hooks/useDialog";
import DialogContext from "./context";

export default function Provider({
  children,
  options,
}: {
  children: React.ReactNode;
  options: Parameters<typeof useDialog>[0];
}) {
  const value = useDialog(options);

  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
}
