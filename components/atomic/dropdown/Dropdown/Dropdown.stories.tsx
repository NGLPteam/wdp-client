import Dropdown from "./Dropdown";
import { Story } from "@storybook/react";
import { ButtonControl } from "components/atomic/buttons";
import { IconFactory } from "components/factories";

type Props = React.ComponentProps<typeof Dropdown>;

export default {
  title: "Components/Atomic/Dropdowns/Dropdown",
  component: Dropdown,
};

const MENU_ITEMS = [
  <a href="#" key={1}>
    Item
  </a>,
  <a href="#" key={2}>
    Item
  </a>,
  <a href="#" key={3}>
    Item
  </a>,
];

const Template: Story<Props> = (args) => {
  return (
    <Dropdown
      label="Example subnav"
      disclosure={<button>Toggle subnav</button>}
      menuItems={MENU_ITEMS}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithButton = Template.bind({});
WithButton.args = {
  ...Default.args,
  disclosure: (
    <ButtonControl icon="chevron" iconRotate={180}>
      Toggle subnav
    </ButtonControl>
  ),
};

export const WithFunction = Template.bind({});
WithFunction.args = {
  ...Default.args,
  disclosure: (disclosureProps) => {
    return (
      <div className="l-flex l-flex--gap">
        <a href="#">A Link</a>
        <button {...disclosureProps}>
          <IconFactory icon="chevron" rotate={180} />
        </button>
      </div>
    );
  },
};

export const MultipleDropdowns: Story<Props> = (args) => {
  return (
    <nav className="l-flex l-flex--gap">
      <Default {...args} />
      <Default {...args} />
      <Default {...args} />
    </nav>
  );
};
MultipleDropdowns.args = {
  disclosure: (
    <ButtonControl icon="chevron" iconRotate={180}>
      Toggle subnav
    </ButtonControl>
  ),
};
