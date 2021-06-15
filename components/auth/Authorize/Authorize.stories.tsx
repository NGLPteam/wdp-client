import React from "react";
import { Story } from "@storybook/react";
import Authorize from "./Authorize";

type AuthorizeProps = React.ComponentProps<typeof Authorize>;

export default {
  title: "Components/Auth/Authorize",
  component: Authorize,
};

const Template: Story<AuthorizeProps> = (args) => (
  <Authorize
    entity="communities"
    permissions={["self.assets.create", "self.update", "items.create"]}
    {...args}
  >
    <h1>Showing children.</h1>
  </Authorize>
);

export const IsAuthorized: Story<AuthorizeProps> = Template.bind({});
IsAuthorized.args = { isAuthorized: true };

export const IsAuthorizedHide: Story<AuthorizeProps> = Template.bind({});
IsAuthorizedHide.args = { isAuthorized: true, behavior: "hide" };

export const IsNotAuthorized: Story<AuthorizeProps> = Template.bind({});
IsNotAuthorized.args = { isAuthorized: false };

export const IsNotAuthorizedShow: Story<AuthorizeProps> = Template.bind({});
IsNotAuthorizedShow.args = { isAuthorized: false, behavior: "hide" };
