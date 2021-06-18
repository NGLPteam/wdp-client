import Breadcrumbs from "./Breadcrumbs";
import { Story } from "@storybook/react";
import { data } from "./Breadcrumbs.data";

type BreadcrumbProps = React.ComponentProps<typeof Breadcrumbs>;

export default {
  title: "Components/Atomic/Breadcrumbs",
  component: Breadcrumbs,
};

const Template: Story<BreadcrumbProps> = (args) => {
  return <Breadcrumbs data={data} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  delimiter: ` / `,
};
