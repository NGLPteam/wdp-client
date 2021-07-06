import TopNavItem from ".";

export default {
  title: "Components/Atomic/TopNavItem",
  component: TopNavItem,
  parameters: {
    themes: {
      default: "brand100",
    },
  },
};

export const Primary = (args) => (
  <TopNavItem as="a" key={1} href="/" {...args}>
    Link A
  </TopNavItem>
);

Primary.args = {
  active: false,
};
