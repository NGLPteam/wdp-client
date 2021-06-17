import MainFooter from "./";

export default {
  title: "Components/Global/MainFooter",
  component: MainFooter,
};

export const Primary = (args) => (
  <MainFooter {...args}>
    <MainFooter.Nav header="Manage">
      <a href="#">Link A</a>
      <a href="#">Link B</a>
      <a href="#">Link C</a>
    </MainFooter.Nav>
    <MainFooter.Nav header="Learn">
      <a href="#">Link A</a>
      <a href="#">Link B</a>
      <a href="#">Link C</a>
    </MainFooter.Nav>
  </MainFooter>
);

Primary.args = {
  about: `Our Institution’s Name, in partnership with the Name of a Service
    Provider, has created this website using NGLP–WDP a modern, open
    source institutional web delivery platform.`,
  copyright: `Copyright 2021 Institution Name and other necessary data. 
    More legal details can be found here.`,
};
