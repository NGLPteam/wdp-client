import { Story } from "@storybook/react";
import SidebarNav from ".";

type Props = React.ComponentProps<typeof SidebarNav>;

export default {
  title: "Components/Atomic/Navs/SidebarNav",
  component: SidebarNav,
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

export const Default: Story<Props> = (args) => <SidebarNav {...args} />;

Default.args = {
  links: LINKS,
};
