import Breadcrumbs from "./Breadcrumbs";
import { Story } from "@storybook/react";

type BreadcrumbProps = React.ComponentProps<typeof Breadcrumbs>;

const data = [
  {
    label: "Breadcrumb Parent",
    href: "#",
  },
  {
    label: "Breadcrumb Child",
    href: "#",
  },
  {
    label: "Another Breadcrumb Child",
    href: "#",
  },
];

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
