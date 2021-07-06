import MainNavItem from ".";

export default {
  title: "Components/Global/MainNav/MainNav.Item",
  component: MainNavItem,
  parameters: {
    themes: {
      default: "brand100",
    },
  },
};

export const Primary = (args) => (
  <MainNavItem as="a" key={1} href="/" {...args}>
    Link A
  </MainNavItem>
);

Primary.args = {
  active: false,
};
