import Modal from "./Modal";
import { Story } from "@storybook/react";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import { ButtonControl, Button } from "components/atomic/buttons";
import { basePadding } from "theme/mixins/appearance";
import { useIsMobile } from "hooks";

type Props = React.ComponentProps<typeof Modal>;

export default {
  title: "Components/Layout/Modal",
  component: Modal,
};

const Template: Story<Props> = (args) => {
  const dialog = useDialogState({ visible: true, animated: true });
  return (
    <>
      <DialogDisclosure {...dialog}>
        <ButtonControl as="span">Toggle Modal</ButtonControl>
      </DialogDisclosure>
      <Modal {...args} dialog={dialog} />
    </>
  );
};

const Content = ({ handleClose }: ContentProps) => {
  const isMobile = useIsMobile();
  return (
    <div>
      <p className="t-copy-sm">
        Description text for this modal window appears here, if necessary.
        Description text for this modal window appears here, if necessary.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          paddingBlockStart: basePadding(10),
          gap: "15px",
        }}
      >
        <Button
          style={{ paddingInline: basePadding(15) }}
          onClick={handleClose}
        >
          Confirm
        </Button>
        <Button
          secondary
          style={{ paddingInline: basePadding(17) }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

interface ContentProps {
  handleClose: () => void;
}

export const Default = Template.bind({});
Default.args = {
  label: "Modal title",
  children: ({ handleClose }) => <Content handleClose={handleClose} />,
};
