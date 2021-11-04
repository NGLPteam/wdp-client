import { Story } from "@storybook/react";
import Dropdown, { BaseDisclosureProps } from "./Dropdown";
import { ButtonControl } from "components/atomic/buttons";
import { IconFactory } from "components/factories";

type Props = React.ComponentProps<typeof Dropdown>;

export default {
  title: "Components/Atomic/Dropdowns/Dropdown",
  component: Dropdown,
};

const MENU_ITEMS = [
  <a href="#" key={1}>
    Item One
  </a>,
  <a href="#" key={2}>
    Item Two
  </a>,
  <a href="#" key={3}>
    Item Three
  </a>,
];

/* eslint-disable @typescript-eslint/no-empty-function */
const BUTTON_ITEMS = [
  <ButtonControl
    onClick={() => {
      console.info("clicked!");
    }}
    icon="edit"
    key={1}
  >
    Edit
  </ButtonControl>,
  <ButtonControl
    onClick={() => {
      console.info("clicked!");
    }}
    icon="delete"
    key={2}
  >
    Delete
  </ButtonControl>,
  <ButtonControl
    onClick={() => {
      console.info("clicked!");
    }}
    icon="arrow"
    iconRotate={90}
    key={3}
  >
    View
  </ButtonControl>,
];
/* eslint-enable @typescript-eslint/no-empty-function */

const Template: Story<Props> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Example",
  disclosure: <button>Toggle</button>,
  menuItems: MENU_ITEMS,
};

export const WithButtonToggle = Template.bind({});
WithButtonToggle.args = {
  ...Default.args,
  disclosure: (
    <ButtonControl icon="chevron" iconRotate={180}>
      Toggle
    </ButtonControl>
  ),
};

export const WithButtonItems = Template.bind({});
WithButtonItems.args = {
  ...Default.args,
  menuItems: BUTTON_ITEMS,
  disclosure: (
    <ButtonControl icon="chevron" iconRotate={180}>
      Toggle
    </ButtonControl>
  ),
};

export const WithFunction = Template.bind({});
WithFunction.args = {
  ...Default.args,
  disclosure: (
    <>
      {(disclosureProps: BaseDisclosureProps) => {
        return (
          <div className="l-flex l-flex--gap">
            <a href="#">A Link</a>
            <button {...disclosureProps}>
              <IconFactory icon="chevron" rotate={180} />
            </button>
          </div>
        );
      }}
    </>
  ),
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
  ...Default.args,
  disclosure: (
    <ButtonControl icon="chevron" iconRotate={180}>
      Toggle
    </ButtonControl>
  ),
};

export const MultipleDropdownsRightAligned: Story<Props> = (args) => {
  return (
    <nav className="l-flex l-flex--gap l-flex--justify-end">
      <Default {...args} />
      <Default {...args} />
      <Default {...args} />
    </nav>
  );
};
MultipleDropdownsRightAligned.args = {
  ...Default.args,
  disclosure: (
    <ButtonControl icon="chevron" iconRotate={180}>
      Toggle
    </ButtonControl>
  ),
};
