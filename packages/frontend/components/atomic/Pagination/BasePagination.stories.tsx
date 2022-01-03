import { Story } from "@storybook/react";
import BasePagination from "./BasePagination";

type Props = React.ComponentProps<typeof BasePagination>;

export default {
  title: "Components/Atomic/Pagination",
  component: BasePagination,
};

const Template: Story<Props> = (args) => <BasePagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  page: 1,
  pageCount: 5,
};
