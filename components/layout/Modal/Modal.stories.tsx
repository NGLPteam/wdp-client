import Modal from "./Modal";
import { Story } from "@storybook/react";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import { ButtonControl } from "components/atomic/buttons";

type Props = React.ComponentProps<typeof Modal>;

export default {
  title: "Components/Layout/Modal",
  component: Modal,
};

const Template: Story<Props> = (args) => {
  const dialog = useDialogState({ visible: true, animated: false });
  console.log(dialog);

  return (
    <>
      <DialogDisclosure {...dialog}>
        <ButtonControl as="span">Toggle Modal</ButtonControl>
      </DialogDisclosure>
      <Modal {...args} dialog={dialog} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Modal title",
  header: "Modal Header",
  children: "Content",
};
