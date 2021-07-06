import MainNav from "./";
import { TopNavItem, TopNavDropdown } from "components/atomic";
import { Search } from "components/atomic/forms";

export default {
  title: "Components/Global/MainNav",
  component: MainNav,
};

function handleSubmit(value) {
  console.info("submitted!", value);
}

export const Primary = () => (
  <MainNav>
    <TopNavItem key={1} href="/">
      Link A
    </TopNavItem>
    <TopNavItem key={2} href="/">
      Link B
    </TopNavItem>
    <TopNavDropdown key={3} label="Dropdown">
      <a href="#">Sublink A</a>
      <a href="#">Sublink B</a>
    </TopNavDropdown>
    <Search onSubmit={handleSubmit} />
  </MainNav>
);
