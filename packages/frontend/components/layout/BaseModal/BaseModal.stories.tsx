import { Story } from "@storybook/react";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import BaseModal from "./BaseModal";
import { Button } from "components/atomic";

type Props = React.ComponentProps<typeof BaseModal>;

export default {
  title: "Components/Layout/BaseModal",
  component: BaseModal,
};

const Template: Story<Props> = (args) => {
  const dialog = useDialogState();
  return (
    <>
      <DialogDisclosure as={Button} {...dialog}>
        Toggle Modal
      </DialogDisclosure>
      <BaseModal {...args} dialog={dialog} label="Modal" />
    </>
  );
};

export const Default: Story<Props> = Template.bind({});

Default.args = {
  header: "Modal header",
  children: "Modal children",
  footer: "Modal footer",
};
