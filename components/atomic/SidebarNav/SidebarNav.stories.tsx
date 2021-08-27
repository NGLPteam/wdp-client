import { Story } from "@storybook/react";
import SidebarNav from ".";

type Props = React.ComponentProps<typeof SidebarNav>;

export default {
  title: "Components/Atomic/SidebarNav",
  component: SidebarNav,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const LINKS = [
  {
    name: "contributor.details",
    path: "/contributors/[slug]/details",
    label: "Details",
    query: {
      slug: "Y4wgPoYTqvnYtDDBsmOgrCkbRDdLOeQ",
    },
  },
  {
    name: "contributor.collections",
    path: "/contributors/[slug]/collections",
    label: "Collection Contributions",
    query: {
      slug: "Y4wgPoYTqvnYtDDBsmOgrCkbRDdLOeQ",
    },
  },
  {
    name: "contributor.items",
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
