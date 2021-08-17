import React from "react";
import { Story } from "@storybook/react";
import Search from ".";

type Props = React.ComponentProps<typeof Search>;

export default {
  title: "Components/Atomic/Forms/Search",
  component: Search,
};

function handleSubmit(value: string) {
  console.info("submitted!", value);
}

export const Primary: Story<Props> = (args) => <Search {...args} />;

Primary.args = {
  onSubmit: handleSubmit,
};
