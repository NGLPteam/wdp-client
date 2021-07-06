import SidebarNav from ".";

export default {
  title: "Components/Layout/SidebarNav",
  component: SidebarNav,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const Default = (args) => (
  <SidebarNav {...args}>
    <SidebarNav.Link href="#" active>
      Link
    </SidebarNav.Link>
    <SidebarNav.Link href="#">Link</SidebarNav.Link>
    <SidebarNav.Link href="#">Link</SidebarNav.Link>
  </SidebarNav>
);

Default.args = {};
