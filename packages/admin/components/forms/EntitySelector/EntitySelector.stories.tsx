import { useState } from "react";
import { Story } from "@storybook/react";
import EntitySelector from "./EntitySelector";

type Props = React.ComponentProps<typeof EntitySelector>;

export default {
  title: "Components/Forms/EntitySelector",
  component: EntitySelector,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => {
  const [checked, setChecked] = useState(false);
  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <>
      <EntitySelector {...args} checked={checked} onToggle={handleToggle}>
        {args.children}
      </EntitySelector>
    </>
  );
};
Template.args = {
  children: "Entity with select and expand",
  hasDescendants: true,
  onShowDescendants: () => alert("opens descendants"),
};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
  disabled: false,
};
