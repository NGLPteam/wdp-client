import { Story } from "@storybook/react";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import BaseDrawer from "./BaseDrawer";
import { Button } from "components/atomic";

type Props = React.ComponentProps<typeof BaseDrawer>;

export default {
  title: "Components/Layout/BaseDrawer",
  component: BaseDrawer,
};

const Template: Story<Props> = (args) => {
  const dialog = useDialogState();
  return (
    <>
      <DialogDisclosure as={Button} {...dialog}>
        Toggle Modal
      </DialogDisclosure>
      <BaseDrawer {...args} dialog={dialog}>
        <a href="#">Child link</a>
      </BaseDrawer>
    </>
  );
};

export const Default: Story<Props> = Template.bind({});

Default.args = {
  label: "Drawer Label",
  header: "Header",
  footer: "Footer",
};
