import MainNav from "./";
import { TopNavItem } from "components/atomic";
import { NavSearch } from "components/global";

export default {
  title: "Components/Global/MainNav",
  component: MainNav,
};

function handleSubmit(value) {
  console.log("submitted!", value);
}

export const Primary = () => (
  <MainNav>
    <TopNavItem key={1} href="/">
      Link A
    </TopNavItem>
    <TopNavItem key={2} href="/">
      Link B
    </TopNavItem>
    <NavSearch onSubmit={handleSubmit} />
  </MainNav>
);
