import React from "react";
import { Story } from "@storybook/react";
import { useNotify } from "hooks";
import ButtonControl from "../buttons/ButtonControl";
import Toast from "./";

export default {
  title: "Components/Atomic/Toast",
  component: Toast,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const Default: Story = () => {
  const notify = useNotify();

  function showPlainToast() {
    notify.info("A plain message");
  }

  function showSuccessToast() {
    notify.success("A success message");
  }

  function showErrorToast() {
    notify.error("An error message");
  }

  return (
    <>
      <div className="l-flex l-flex--gap">
        <ButtonControl onClick={showPlainToast}>Plain Toast</ButtonControl>
        <ButtonControl onClick={showSuccessToast}>Success Toast</ButtonControl>
        <ButtonControl onClick={showErrorToast}>Error Toast</ButtonControl>
      </div>

      <Toast />
    </>
  );
};
