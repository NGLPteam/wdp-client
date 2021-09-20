import ButtonControlGroup from "./ButtonControlGroup";
import { Story } from "@storybook/react";
import { breakpoints } from "theme/base/variables";
type Props = React.ComponentProps<typeof ButtonControlGroup>;

export default {
  title: "Components/Atomic/Buttons/ButtonControlGroup",
  component: ButtonControlGroup,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
  argTypes: {
    breakpoint: {
      options: [...Object.keys(breakpoints)],
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => (
  <>
    <p>
      Actions collapse into a dropdown when browser width is &lt; breakpoint
      width.
    </p>
    <br />
    <ButtonControlGroup {...args} />
  </>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  toggleLabel: "Options",
  buttons: [
    {
      children: "Add",
      drawer: "addPerson",
      icon: "plus",
    },
    {
      children: "Edit",
      icon: "edit",
    },
    {
      children: "Delete",
      icon: "delete",
    },
  ],
};

export const WithAuthActions: Story<Props> = Template.bind({});

WithAuthActions.args = {
  toggleLabel: "Options",
  buttons: [
    {
      children: "Add",
      drawer: "addPerson",
      icon: "plus",
      actions: "self.add",
      allowedActions: ["self.edit", "self.add"],
    },
    {
      children: "Edit",
      icon: "edit",
      actions: "self.edit",
      allowedActions: ["self.edit", "self.add"],
    },
    {
      children: "Delete",
      icon: "delete",
      actions: "self.delete",
      allowedActions: ["self.edit", "self.add"],
    },
  ],
};
