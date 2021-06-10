import TopNavItem from "./";

export default {
  title: "Components/Atomic/TopNavItem",
  component: TopNavItem,
};

const wrapperStyle = {
  backgroundColor: "var(--brand100)",
  padding: "2rem",
};

export const Primary = () => (
  <div style={wrapperStyle}>
    <TopNavItem as="a" key={1} href="/">
      Link A
    </TopNavItem>
  </div>
);
