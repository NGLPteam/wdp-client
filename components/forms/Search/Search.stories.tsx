import React from "react";
import { Story } from "@storybook/react";
import Search from ".";
type Props = React.ComponentProps<typeof Search>;

export default {
  title: "Components/Forms/Search",
  component: Search,
  parameters: {
    themes: {
      default: "brand100",
    },
  },
};

function handleSubmit(value) {
  console.log("submitted!", value);
}

export const Primary: Story<Props> = (args) => <Search {...args} />;

Primary.args = {
  onSubmit: handleSubmit,
};
