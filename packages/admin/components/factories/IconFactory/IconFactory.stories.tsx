import { Story } from "@storybook/react";
import IconFactory, { IconKeys, ICON_MAP, SIZE_MAP } from "./IconFactory";
type Props = React.ComponentProps<typeof IconFactory>;

export default {
  title: "Components/Factories/IconFactory",
  component: IconFactory,
  argTypes: {
    icon: {
      options: Object.keys(ICON_MAP),
      control: { type: "select" },
    },
    size: {
      options: Object.keys(SIZE_MAP),
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => <IconFactory {...args} />;
Template.args = {
  icon: "arrow",
  size: "sm",
};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};

const icons = Object.keys(ICON_MAP) as IconKeys[];

export const AllIcons: Story<Props> = ({ icon, ...args }) => (
  <div className="l-flex l-flex--gap">
    {icons.map((key, i) => (
      <div key={i}>
        <IconFactory icon={key} {...args} />
      </div>
    ))}
  </div>
);
AllIcons.args = {
  size: "sm",
};
