import Modal from "./Modal";
import { Story } from "@storybook/react";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import { ButtonControl, Button } from "components/atomic/buttons";
import { basePadding } from "theme/mixins/appearance";

type Props = React.ComponentProps<typeof Modal>;

export default {
  title: "Components/Layout/Modal",
  component: Modal,
};

const Template: Story<Props> = (args) => {
  const dialog = useDialogState({ visible: true, animated: true });
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

const Content = () => (
  <div>
    <p className="t-copy-sm">
      Description text for this modal window appears here, if necessary.
      Description text for this modal window appears here, if necessary.
    </p>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingBlockStart: basePadding(10),
      }}
    >
      <Button style={{ paddingInline: basePadding(15) }}>Confirm</Button>
      <Button secondary style={{ paddingInline: basePadding(17) }}>
        Cancel
      </Button>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "Modal title",
  children: <Content />,
};
