import React from "react";
import { Story } from "@storybook/react";
import IconFactory, { ICON_KEYS, SIZE_KEYS } from "./IconFactory";
type Props = React.ComponentProps<typeof IconFactory>;

export default {
  title: "Components/Factories/IconFactory",
  component: IconFactory,
  argTypes: {
    icon: {
      options: ICON_KEYS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_KEYS,
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => <IconFactory {...args} />;
Template.args = {
  icon: ICON_KEYS[0],
  size: "sm",
};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};

export const AllIcons: Story<Props> = ({ icon, ...args }) => (
  <div className="l-flex l-flex--gap">
    {ICON_KEYS.map((key, i) => (
      <div key={i}>
        <IconFactory icon={key} {...args} />
      </div>
    ))}
  </div>
);
AllIcons.args = {
  size: "sm",
};
