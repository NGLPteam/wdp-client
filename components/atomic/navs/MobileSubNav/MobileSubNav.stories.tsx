import { Story } from "@storybook/react";
import MobileSubNav from ".";

type Props = React.ComponentProps<typeof MobileSubNav>;

export default {
  title: "Components/Atomic/Navs/MobileSubNav",
  component: MobileSubNav,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const LINKS = [
  {
    route: "contributor.details",
    path: "/contributors/[slug]/details",
    label: "Details",
    query: {
      slug: "Y4wgPoYTqvnYtDDBsmOgrCkbRDdLOeQ",
    },
  },
  {
    route: "contributor.collections",
    path: "/contributors/[slug]/collections",
    label: "Collection Contributions",
    query: {
      slug: "Y4wgPoYTqvnYtDDBsmOgrCkbRDdLOeQ",
    },
  },
  {
    route: "contributor.items",
    path: "/contributors/[slug]/items",
    label: "Item Contributions",
    query: {
      slug: "Y4wgPoYTqvnYtDDBsmOgrCkbRDdLOeQ",
    },
  },
];

const TABS = [
  {
    route: "collection.child.collections",
    label: "glossary.collection_plural",
  },
  {
    route: "collection.child.items",
    label: "glossary.item_plural",
  },
  {
    route: "collection.manage",
    label: "manage",
  },
];

export const Default: Story<Props> = (args) => <MobileSubNav {...args} />;

Default.args = {
  sidebarLinks: LINKS,
  tabRoutes: TABS,
};
