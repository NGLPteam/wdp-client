import React from "react";
import { Story } from "@storybook/react";
import MixedLink from "./MixedLink";

type MixedLinkProps = React.ComponentProps<typeof MixedLink>;

export default {
  title: "Components/Atomic/MixedLink",
  component: MixedLink,
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
};

const internalLink = "/collections/1";
const internalLinkWithQuery = "/collections/?order=1";
const externalLink = "https://www.google.com";

const Template: Story<MixedLinkProps> = (args) => (
  <MixedLink {...args}>
    <a>Click Me</a>
  </MixedLink>
);

export const InternalLink: Story<MixedLinkProps> = Template.bind({});
InternalLink.args = { href: internalLink };

export const InternalLinkWithQuery: Story<MixedLinkProps> = Template.bind({});
InternalLinkWithQuery.args = { href: internalLinkWithQuery };

export const ExternalLink: Story<MixedLinkProps> = Template.bind({});
ExternalLink.args = { href: externalLink };
