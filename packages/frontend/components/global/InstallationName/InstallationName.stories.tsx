import { Story } from "@storybook/react";
import InstallationName from "./InstallationName";
type Props = React.ComponentProps<typeof InstallationName>;

export default {
  title: "Components/Global/InstallationName",
  component: InstallationName,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const COMMUNITIES = [
  <a href="#" key={1} className="t-copy-sm">
    Community One
  </a>,
  <a href="#" key={2} className="t-copy-sm">
    Community Two
  </a>,
  <a href="#" key={3} className="t-copy-sm">
    Community Three
  </a>,
];

const Template: Story<Props> = ({ name, communities }) => (
  <InstallationName name={name} communities={communities} />
);

export const Default: Story<Props> = Template.bind({});
Default.args = {
  name: "WDP Installation Name",
  communities: COMMUNITIES,
};
