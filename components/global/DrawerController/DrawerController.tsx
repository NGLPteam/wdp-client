import React, { useEffect } from "react";
import { useDrawerQuery } from "hooks";
import Drawer from "components/layout/Drawer";
import { useDialogState } from "reakit/Dialog";

/**
 * Controls opening & closing the global dialog
 * Controls what dialog content to show based on query paramters
 * passed from DrawerContext
 */
const DrawerController = () => {
  const { type, removeDialogQuery } = useDrawerQuery();
  const dialog = useDialogState({ animated: true, visible: !!type });

  // Remove dialog query strings if the dialog is closed
  // This is needed in case the user hits escape or clicks outside the dialog
  useEffect(() => {
    if (!dialog.visible) removeDialogQuery();
  }, [dialog.visible, removeDialogQuery]);

  // Open the drawer if dialog type is defined
  useEffect(() => {
    if (type) dialog.show();
    // eslint-disable-next-line
  }, [type]);

  // TODO: Change label, header and contents based on query
  return (
    <Drawer label="Drawer" header="Drawer header" dialog={dialog}>
      <div>Content</div>
    </Drawer>
  );
};

export default DrawerController;
