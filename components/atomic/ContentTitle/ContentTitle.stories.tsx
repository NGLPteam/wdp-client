import ContentTitle from ".";

export default {
  title: "Components/Atomic/ContentTitle",
  component: ContentTitle,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const Primary = ({ text }) => <ContentTitle>{text}</ContentTitle>;

Primary.args = {
  text: "Page Content",
};

export const Secondary = ({ text }) => (
  <ContentTitle as="h2">{text}</ContentTitle>
);

Secondary.args = {
  text: "Secondary Page Content",
};
