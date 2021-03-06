import { Story } from "@storybook/react";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import Modal from "./Modal";
import { ButtonControl, Button } from "components/atomic/buttons";
import { pxToRem } from "theme/mixins/functions";
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
          paddingBlockStart: pxToRem(40),
          gap: "15px",
        }}
      >
        <Button style={{ paddingInline: pxToRem(60) }} onClick={handleClose}>
          Confirm
        </Button>
        <Button
          secondary
          style={{ paddingInline: pxToRem(68) }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

const ScrollContent = ({ handleClose }: ContentProps) => {
  const isMobile = useIsMobile();
  return (
    <div>
      <p className="t-copy-sm">
        Description text for this modal window appears here, if necessary.
        Description text for this modal window appears here, if necessary.
      </p>
      <br />
      <p className="t-copy-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.{" "}
      </p>
      <br />
      <p className="t-copy-sm">
        Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
        quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
        tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus
        risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
        quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus,
        ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat
        condimentum velit.{" "}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          paddingBlockStart: pxToRem(40),
          gap: "15px",
        }}
      >
        <Button style={{ paddingInline: pxToRem(60) }} onClick={handleClose}>
          Confirm
        </Button>
        <Button
          secondary
          style={{ paddingInline: pxToRem(68) }}
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

export const WithScrollingContent = Template.bind({});
WithScrollingContent.args = {
  label: "Modal title",
  children: ({ handleClose }) => <ScrollContent handleClose={handleClose} />,
};
