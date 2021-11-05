import React from "react";
import { Story } from "@storybook/react";
import Breadcrumbs from "./Breadcrumbs";

type Props = React.ComponentProps<typeof Breadcrumbs>;

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

const Template: Story<Props> = (args) => {
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
