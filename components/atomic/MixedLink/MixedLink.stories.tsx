/* eslint-disable no-console, jsx-a11y/click-events-have-key-events */
import React from "react";
import { Story } from "@storybook/react";
import MixedLink, { Props } from ".";

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

const Template: Story<Props> = (args) => (
  <MixedLink {...args}>
    <a>Click Me</a>
  </MixedLink>
);

export const InternalLink: Story<Props> = Template.bind({});
InternalLink.args = { href: internalLink };

export const InternalLinkWithQuery: Story<Props> = Template.bind({});
InternalLinkWithQuery.args = { href: internalLinkWithQuery };

export const ExternalLink: Story<Props> = Template.bind({});
ExternalLink.args = { href: externalLink };
