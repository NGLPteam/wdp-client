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
  return <Breadcrumbs {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  delimiter: ` / `,
  data,
};

const dataLong = [
  {
    label: "Breadcrumb Parent",
    href: "#",
  },
  {
    label: "Breadcrumb Child",
    href: "#",
  },
  {
    label: "Breadcrumb Child",
    href: "#",
  },
  {
    label: "Breadcrumb Child",
    href: "#",
  },
  {
    label: "Breadcrumb Child",
    href: "#",
  },
  {
    label: "Breadcrumb Child",
    href: "#",
  },
];

export const WithMoreThanFourItems = Template.bind({});
WithMoreThanFourItems.args = {
  delimiter: ` / `,
  data: dataLong,
};
