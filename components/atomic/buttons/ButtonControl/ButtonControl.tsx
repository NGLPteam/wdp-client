import React, { forwardRef } from "react";
import * as Styled from "./ButtonControl.styles";
import { IconFactory } from "components/factories";
import { Authorize } from "components/auth";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import ConfirmModalContent from "components/composed/ConfirmModalContent";
import Modal from "components/layout/Modal";
type IconFactoryProps = React.ComponentProps<typeof IconFactory>;
type AuthorizeProps = React.ComponentProps<typeof Authorize>;

const ButtonControl = forwardRef(
  ({ children, iconRotate, actions, allowedActions, ...props }: Props, ref) => {
    const { icon, size, onClick } = props;

    const addModal = () => {
      if (icon === "delete") {
        const dialog = useDialogState({ visible: true, animated: true });
        return (
          <>
            <DialogDisclosure {...dialog}>{children}</DialogDisclosure>
            <Modal dialog={dialog} label="Confirm Delete">
              {({ handleClose }) => (
                <ConfirmModalContent
                  handleClose={handleClose}
                  onConfirm={onClick}
                  body="Are you sure you want to delete?"
                />
              )}
            </Modal>
          </>
        );
      }
    };

    const content = (
      <Styled.ButtonControl ref={ref} {...props}>
        <>
          {children && (
            <Styled.ButtonText size={size} icon={icon}>
              {children}
            </Styled.ButtonText>
          )}
          {icon && (
            <IconFactory icon={icon} rotate={iconRotate} role="presentation" />
          )}
        </>
      </Styled.ButtonControl>
    );

    return actions || allowedActions ? (
      <Authorize actions={actions} allowedActions={allowedActions}>
        {content}
      </Authorize>
    ) : (
      content
    );
  }
);

interface Props extends Omit<AuthorizeProps, "children"> {
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: IconFactoryProps["icon"];
  iconRotate?: number;
  as?: React.ElementType;
  onClick?: React.MouseEventHandler;
  "aria-label"?: string;
  type?: "button" | "submit";
  size?: "large";
}

export default ButtonControl;
