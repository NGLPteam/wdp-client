import React from "react";
import { Story } from "@storybook/react";
import { withNextRouter } from "storybook-addon-next-router";
import Pagination from ".";

type Props = React.ComponentProps<typeof Pagination>;

export default {
  title: "Components/Atomic/Pagination",
  component: Pagination,
  decorators: [withNextRouter],
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const Default: Story<Props> = (args) => <Pagination {...args} />;

Default.args = {
  currentPage: 1,
  totalPages: 10,
  onNextPage: "?page=2",
  onPrevPage: "?page=1",
  onSubmit: (value: string) => {
    console.info(value);
  },
};
