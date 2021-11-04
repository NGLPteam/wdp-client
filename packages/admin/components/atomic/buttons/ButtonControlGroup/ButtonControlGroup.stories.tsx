import { Story } from "@storybook/react";
import i18next from "i18next";
import ButtonControlGroup from "./ButtonControlGroup";
import { breakpoints } from "theme/base/variables";
import ButtonControl, {
  ButtonControlDrawer,
  ButtonControlConfirm,
} from "components/atomic/buttons/ButtonControl";

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
    <ButtonControlGroup {...args}>
      <ButtonControlDrawer drawer="addPerson" icon="plus">
        {"Add"}
      </ButtonControlDrawer>
      <ButtonControl icon="edit">{"Edit"}</ButtonControl>
      <ButtonControlConfirm
        icon="delete"
        modalLabel={i18next.t("messages.delete.confirm_label")}
        modalBody={
          <p className="t-copy-sm">
            {i18next.t("messages.delete.confirm_body")}
          </p>
        }
      >
        {"Delete"}
      </ButtonControlConfirm>
    </ButtonControlGroup>
  </>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  toggleLabel: "Options",
};

export const WithAuthActions: Story<Props> = (args) => (
  <>
    <p>
      Actions collapse into a dropdown when browser width is &lt; breakpoint
      width.
    </p>
    <br />
    <ButtonControlGroup {...args}>
      <ButtonControlDrawer
        drawer="addPerson"
        icon="plus"
        actions="self.add"
        allowedActions={["self.edit", "self.add"]}
      >
        {"Add"}
      </ButtonControlDrawer>
      <ButtonControl
        icon="edit"
        actions="self.edit"
        allowedActions={["self.edit", "self.add"]}
      >
        {"Edit"}
      </ButtonControl>
      <ButtonControlConfirm
        icon="delete"
        modalLabel={i18next.t("messages.delete.confirm_label")}
        modalBody={
          <p className="t-copy-sm">
            {i18next.t("messages.delete.confirm_body")}
          </p>
        }
        actions="self.delete"
        allowedActions={["self.edit", "self.add"]}
      >
        {"Delete"}
      </ButtonControlConfirm>
    </ButtonControlGroup>
  </>
);

WithAuthActions.args = {
  toggleLabel: "Options",
};
