import PageHeader from "./";
import { data } from "components/atomic/Breadcrumbs/Breadcrumb.data";
import { TabNav, Tab } from "components/atomic";

export default {
  title: "Components/Layout/PageHeader",
  component: PageHeader,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const Primary = (args) => (
  <PageHeader {...args} breadcrumbsProps={{ data }}>
    <TabNav>
      <Tab active>Child Collections</Tab>
      <Tab href="#">Child Items</Tab>
      <Tab href="#">Manage</Tab>
    </TabNav>
  </PageHeader>
);

Primary.args = {
  title: "Page Header",
};
