import { Story } from "@storybook/react";
import PageHeader from "./";
import { data } from "components/atomic/Breadcrumbs/Breadcrumb.data";

type Props = React.ComponentProps<typeof PageHeader>;

const tabRoutes = [
  {
    route: "collections",
    label: "collections",
  },
  {
    route: "items",
    label: "items",
  },
];

export default {
  title: "Components/Layout/PageHeader",
  component: PageHeader,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
  argTypes: {
    headerStyle: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};

export const Default: Story<Props> = (args) => (
  <PageHeader
    {...args}
    breadcrumbsProps={{ data, className: "", delimiter: ">" }}
    tabRoutes={tabRoutes}
  />
);

Default.args = {
  title: "Page Header",
  headerStyle: "primary",
};
