import React from "react";
import { Story } from "@storybook/react";
import Authorize, { Props } from "./Authorize";

export default {
  title: "Components/Common/Authorize",
  component: Authorize,
};

const Template: Story<Props> = (args) => (
  <Authorize
    entity="communities"
    permissions={["self.assets.create", "self.update", "items.create"]}
    {...args}
  >
    <h1>I am authorized!</h1>
  </Authorize>
);

export const IsAuthorized: Story<Props> = Template.bind({});
IsAuthorized.args = { isAuthorized: true };

export const IsNotAuthorized: Story<Props> = Template.bind({});
IsAuthorized.args = { isAuthorized: false };
