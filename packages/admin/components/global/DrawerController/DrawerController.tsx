import React, { useEffect } from "react";
import { useDrawerHelper } from "hooks";
import { useDialogState } from "reakit/Dialog";
import get from "lodash/get";

/**
 * Controls opening & closing the global dialog
 * Controls what dialog content to show based on query paramters
 * passed from DrawerContext
 */
const DrawerController = () => {
  const drawerHelper = useDrawerHelper();

  const dialog = useDialogState({
    animated: true,
    visible: !!drawerHelper.type,
  });

  // Remove dialog query strings if the dialog is closed
  // This is needed in case the user hits escape or clicks outside the dialog
  useEffect(() => {
    if (!dialog.visible) drawerHelper.close();
    // eslint-disable-next-line
  }, [dialog.visible]);

  // Open the drawer if dialog type is defined
  useEffect(() => {
    if (drawerHelper.type) dialog.show();
    // eslint-disable-next-line
  }, [drawerHelper.type]);

  const DrawerContent = drawerHelper.type
    ? get(drawerHelper.drawers, drawerHelper.type)
    : null;

  if (!DrawerContent) return null;

  return (
    <DrawerContent
      params={drawerHelper.params}
      dialog={dialog}
      hideOnClickOutside={false}
    />
  );
};

export default DrawerController;
