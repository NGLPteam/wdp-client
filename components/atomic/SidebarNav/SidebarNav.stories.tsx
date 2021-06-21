import SidebarNav from ".";

export default {
  title: "Components/Atomic/SidebarNav",
  component: SidebarNav,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const Primary = (args) => (
  <SidebarNav {...args}>
    <SidebarNav.Link href="#" active>
      Link
    </SidebarNav.Link>
    <SidebarNav.Link href="#">Link</SidebarNav.Link>
    <SidebarNav.Link href="#">Link</SidebarNav.Link>
  </SidebarNav>
);

Primary.args = {};
