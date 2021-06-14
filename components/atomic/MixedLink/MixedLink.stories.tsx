/* eslint-disable no-console, jsx-a11y/click-events-have-key-events */
import React from "react";
import { Story } from "@storybook/react";
import MixedLink, { Props } from ".";

export default {
  title: "Components/Atomic/MixedLink",
  component: MixedLink,
  argTypes: { onClick: { action: "clicked" } },
};

const handleClick = (e: React.MouseEvent) => {
  e.preventDefault();
  console.log("clicked: " + e.target);
};

const internalLink = "/collections/1";
const internalLinkWithQuery = "/collections/?order=1";
const externalLink = "https://www.google.com";

const Template: Story<Props> = (args) => (
  <div onClick={handleClick} role="link" tabIndex={0}>
    <MixedLink {...args}>
      <a>Click Me</a>
    </MixedLink>
  </div>
);

export const InternalLink: Story<Props> = Template.bind({});
InternalLink.args = { href: internalLink };

export const InternalLinkWithQuery: Story<Props> = Template.bind({});
InternalLinkWithQuery.args = { href: internalLinkWithQuery };

export const ExternalLink: Story<Props> = Template.bind({});
ExternalLink.args = { href: externalLink };
