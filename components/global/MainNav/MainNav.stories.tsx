import MainNav from "./";

export default {
  title: "Components/Global/MainNav",
  component: MainNav,
};

export const Primary = () => (
  <MainNav>
    <a key={1} href="/">
      Link A
    </a>
    <a key={2} href="/">
      Link B
    </a>
  </MainNav>
);
