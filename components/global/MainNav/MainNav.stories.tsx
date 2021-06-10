import MainNav from "./";
import TopNavItem from "components/atomic/TopNavItem";

export default {
  title: "Components/Global/MainNav",
  component: MainNav,
};

export const Primary = () => (
  <MainNav>
    <TopNavItem key={1} href="/">
      Link A
    </TopNavItem>
    <TopNavItem key={2} href="/">
      Link B
    </TopNavItem>
  </MainNav>
);
