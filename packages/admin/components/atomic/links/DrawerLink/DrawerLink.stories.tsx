import React from "react";
import { Story } from "@storybook/react";
// import { withNextRouter } from "storybook-addon-next-router";
import { ButtonControl } from "components/atomic";
import DrawerLink from "./DrawerLink";

type Props = React.ComponentProps<typeof DrawerLink>;

export default {
  title: "Components/Atomic/Links/DrawerLink",
  component: DrawerLink,
  // decorators: [withNextRouter],
};

/**
 * View updates to next router in Actions panel
 */
const Template: Story<Props> = ({ children, ...args }) => (
  <DrawerLink {...args}>{children}</DrawerLink>
);
Template.args = {
  drawer: "addPerson",
  passHref: true,
  children: <a>Example Drawer Link</a>,
};

export const Default: Story<Props> = Template.bind({});
Default.args = {
  ...Template.args,
};

export const WithButton: Story<Props> = Template.bind({});
WithButton.args = {
  ...Template.args,
  children: <ButtonControl as="a">Example Drawer Link</ButtonControl>,
};
