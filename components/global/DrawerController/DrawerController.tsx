import React, { useEffect } from "react";
import { useDrawerQuery } from "hooks";
import { useDialogState } from "reakit/Dialog";
import drawers from "./helpers/drawers";
import get from "lodash/get";

/**
 * Controls opening & closing the global dialog
 * Controls what dialog content to show based on query paramters
 * passed from DrawerContext
 */
const DrawerController = () => {
  const { type, removeDialogQuery } = useDrawerQuery();

  const dialog = useDialogState({
    animated: true,
    visible: !!type,
  });

  // Remove dialog query strings if the dialog is closed
  // This is needed in case the user hits escape or clicks outside the dialog
  useEffect(() => {
    if (!dialog.visible) removeDialogQuery();
    // eslint-disable-next-line
  }, [dialog.visible]);

  // Open the drawer if dialog type is defined
  useEffect(() => {
    if (type) dialog.show();
    // eslint-disable-next-line
  }, [type]);

  const DrawerContent = type ? get(drawers, type) : null;

  if (!DrawerContent) return null;

  return <DrawerContent dialog={dialog} hideOnClickOutside={false} />;
};

export default DrawerController;
