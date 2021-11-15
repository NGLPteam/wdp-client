import { Story } from "@storybook/react";
import CommunityPicker from ".";
type Props = React.ComponentProps<typeof CommunityPicker>;

export default {
  title: "Components/Global/CommunityPicker",
  component: CommunityPicker,
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

const Template: Story<Props> = ({ communities }) => (
  <CommunityPicker communities={communities} />
);

export const Default: Story<Props> = Template.bind({});
Default.args = {
  communities: COMMUNITIES,
};
