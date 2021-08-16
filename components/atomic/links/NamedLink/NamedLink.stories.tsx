import React from "react";
import { Story } from "@storybook/react";
// import { withNextRouter } from "storybook-addon-next-router";
import NamedLink from "./NamedLink";

type Props = React.ComponentProps<typeof NamedLink>;

export default {
  title: "Components/Atomic/Links/NamedLink",
  component: NamedLink,
  // decorators: [withNextRouter],
};

const Template: Story<Props> = (args) => (
  <NamedLink {...args}>
    <a>Route link</a>
  </NamedLink>
);

Template.args = {
  passHref: true,
  route: "communities",
};

export const Default: Story<Props> = Template.bind({});
Default.args = {
  ...Template.args,
};

export const WithRouteParams: Story<Props> = Template.bind({});
WithRouteParams.args = {
  passHref: true,
  route: "community",
  routeParams: {
    slug: 1,
  },
};

export const WithQuery: Story<Props> = Template.bind({});
WithQuery.args = {
  ...Template.args,
  query: {
    page: 2,
  },
};
