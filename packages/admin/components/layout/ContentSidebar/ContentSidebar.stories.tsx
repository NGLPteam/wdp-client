import { Story } from "@storybook/react";
import { ContentHeader } from "..";
import ContentSidebar from "./";

type Props = React.ComponentProps<typeof ContentSidebar>;

const LINKS = [
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
  title: "Components/Layout/ContentSidebar",
  component: ContentSidebar,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const Default: Story<Props> = (args) => (
  <ContentSidebar {...args}>
    <ContentHeader title="Example content" headerStyle="secondary" />
  </ContentSidebar>
);

Default.args = {
  sidebarLinks: LINKS,
};
