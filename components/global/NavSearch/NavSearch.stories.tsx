import React from "react";
import { Story } from "@storybook/react";
import NavSearch from ".";
type Props = React.ComponentProps<typeof NavSearch>;

export default {
  title: "Components/Global/NavSearch",
  component: NavSearch,
};

function handleSubmit(value) {
  console.log("submitted!", value);
}

export const Primary: Story<Props> = (args) => <NavSearch {...args} />;

Primary.args = {
  onSubmit: handleSubmit,
};
