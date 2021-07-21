import { Story } from "@storybook/react";
import PageHeader from "./";
import { data } from "components/atomic/Breadcrumbs/Breadcrumb.data";
import { TabNav } from "components/atomic";

type Props = React.ComponentProps<typeof PageHeader>;

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
  <PageHeader
    {...args}
    breadcrumbsProps={{ data }}
    tabs={
      <TabNav>
        <TabNav.Tab active>Child Collections</TabNav.Tab>
        <TabNav.Tab href="#">Child Items</TabNav.Tab>
        <TabNav.Tab href="#">Manage</TabNav.Tab>
      </TabNav>
    }
  />
);

Default.args = {
  title: "Page Header",
};
