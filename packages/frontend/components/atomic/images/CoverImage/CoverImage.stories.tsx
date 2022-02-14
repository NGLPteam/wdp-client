import { Story } from "@storybook/react";
import CoverImageBase from "./CoverImageBase";

type Props = React.ComponentProps<typeof CoverImageBase>;

export default {
  title: "Components/Atomic/Images/CoverImage",
  component: CoverImageBase,
};

const Template: Story<Props> = (args) => <CoverImageBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: "",
  url: `/images/placeholders/blue-ucla.png`,
  width: 225,
  height: 300,
};

export const NoImage = Template.bind({});
NoImage.args = {
  alt: "",
  width: 225,
  height: 300,
  title: "Title",
};

const LinkTemplate: Story<Props> = (args) => (
  <a className="some-class" href="#">
    <CoverImageBase {...args} />
  </a>
);

export const InsideLink = LinkTemplate.bind({});
InsideLink.args = {
  alt: "journal cover",
  url: `/images/placeholders/blue-ucla.png`,
  width: 225,
  height: 300,
};

export const InsideLinkNoImage = LinkTemplate.bind({});
InsideLinkNoImage.args = {
  alt: "",
  width: 225,
  height: 300,
  title: "Title",
};
