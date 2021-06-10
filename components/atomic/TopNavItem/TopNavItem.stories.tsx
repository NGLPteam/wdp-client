import TopNavItem from "./";

export default {
  title: "Components/Atomic/TopNavItem",
  component: TopNavItem,
};

const wrapperStyle = {
  backgroundColor: "var(--brand100)",
  padding: "2rem",
};

export const Primary = (args) => (
  <div style={wrapperStyle}>
    <TopNavItem as="a" key={1} href="/" {...args}>
      Link A
    </TopNavItem>
  </div>
);

Primary.args = {
  active: false,
};
