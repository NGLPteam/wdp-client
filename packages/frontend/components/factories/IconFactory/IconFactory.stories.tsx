import React from "react";
import { Story } from "@storybook/react";
import IconFactory, { IconKeys, ICON_MAP } from "./IconFactory";
type Props = React.ComponentProps<typeof IconFactory>;

export default {
  title: "Components/Factories/IconFactory",
  component: IconFactory,
  argTypes: {
    icon: {
      options: Object.keys(ICON_MAP),
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => <IconFactory {...args} />;
Template.args = {
  icon: "search",
  title: "Icon title",
};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};

const icons = Object.keys(ICON_MAP) as IconKeys[];

export const AllIcons: Story<Props> = () => (
  <div className="l-flex l-flex--gap">
    {icons.map((key, i) => (
      <div key={i}>
        <IconFactory icon={key} />
      </div>
    ))}
  </div>
);
