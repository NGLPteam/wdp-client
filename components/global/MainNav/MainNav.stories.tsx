import MainNav from "./";
import { Search } from "components/atomic/forms";

export default {
  title: "Components/Global/MainNav",
  component: MainNav,
};

function handleSubmit(value) {
  console.info("submitted!", value);
}

export const Default = () => (
  <MainNav>
    <MainNav.Item key={1} href="/">
      Link A
    </MainNav.Item>
    <MainNav.Item key={2} href="/">
      Link B
    </MainNav.Item>
    <MainNav.Dropdown key={3} label="Dropdown">
      <a href="#">Sublink A</a>
      <a href="#">Sublink B</a>
    </MainNav.Dropdown>
    <Search onSubmit={handleSubmit} />
  </MainNav>
);
