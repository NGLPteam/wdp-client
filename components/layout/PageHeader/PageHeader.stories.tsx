import PageHeader from "./";
import { data } from "components/atomic/Breadcrumbs/Breadcrumb.data";
import { TabNav } from "components/atomic";

export default {
  title: "Components/Layout/PageHeader",
  component: PageHeader,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const Default = (args) => (
  <PageHeader {...args} breadcrumbsProps={{ data }}>
    <TabNav>
      <TabNav.Tab active>Child Collections</TabNav.Tab>
      <TabNav.Tab href="#">Child Items</TabNav.Tab>
      <TabNav.Tab href="#">Manage</TabNav.Tab>
    </TabNav>
  </PageHeader>
);

Default.args = {
  title: "Page Header",
};
