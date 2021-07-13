import React from "react";
import { Story } from "@storybook/react";
import { withNextRouter } from "storybook-addon-next-router";
import DrawerLink from "./DrawerLink";
import { ButtonControl } from "components/atomic";

type Props = React.ComponentProps<typeof DrawerLink>;

export default {
  title: "Components/Atomic/Links/DrawerLink",
  component: DrawerLink,
  decorators: [withNextRouter],
};

/**
 * View updates to next router in Actions panel
 */
export const Template: Story<Props> = ({ children, ...args }) => (
  <DrawerLink {...args}>{children}</DrawerLink>
);

Template.args = {
  drawer: "add",
  passHref: true,
  children: <a>Example Drawer Link</a>,
};

export const WithButton: Story<Props> = Template.bind({});
WithButton.args = {
  ...Template.args,
  children: <ButtonControl as="a">Example Drawer Link</ButtonControl>,
};
