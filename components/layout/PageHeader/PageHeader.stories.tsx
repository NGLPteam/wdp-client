import { Story } from "@storybook/react";
import PageHeader from "./";
import { data } from "components/atomic/Breadcrumbs/Breadcrumb.data";

type Props = React.ComponentProps<typeof PageHeader>;

const tabRoutes = [
  {
    route: "home",
    label: "Tab A",
  },
  {
    route: "home",
    label: "Tab B",
  },
  {
    route: "home",
    label: "Tab C",
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
};

export const Default: Story<Props> = (args) => (
  <PageHeader {...args} breadcrumbsProps={{ data }} tabRoutes={tabRoutes} />
);

Default.args = {
  title: "Page Header",
};
