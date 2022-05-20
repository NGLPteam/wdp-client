import { useState } from "react";
import { Story } from "@storybook/react";
import EntitySelector from "../EntitySelector";
import EntitySelectorUI from "./EntitySelectorUI";
import NullForm from "components/api/NullForm";

type FieldValues = {
  example?: string;
};

type Props = React.ComponentProps<typeof EntitySelectorUI>;

export default {
  title: "Components/Forms/EntitySelectorUI",
  component: EntitySelectorUI,
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
  const [parent, setParent] = useState("");

  return (
    <NullForm<FieldValues>>
      {({ form: { register } }) => (
        <EntitySelectorUI
          {...args}
          {...register("example")}
          parent={parent}
          onParentClick={() => setParent("")}
        >
          <>
            {!parent && (
              <>
                <EntitySelector
                  hasDescendants
                  onShowDescendants={() => setParent("Item 1")}
                  checked={checked}
                  onToggle={handleToggle}
                >
                  Item 1 with descendants
                </EntitySelector>
                <EntitySelector
                  hasDescendants
                  onShowDescendants={() => setParent("Item 2")}
                  checked={checked}
                  onToggle={handleToggle}
                >
                  Item 2 with descendants
                </EntitySelector>
                <EntitySelector
                  onShowDescendants={() => setParent("Item 3")}
                  checked={checked}
                  onToggle={handleToggle}
                >
                  Item 3 no descendants
                </EntitySelector>
              </>
            )}
            {parent && (
              <>
                <EntitySelector
                  onShowDescendants={() => setParent("Child Item 1")}
                  checked={checked}
                  onToggle={handleToggle}
                >
                  Child Item 1 no descendants
                </EntitySelector>
                <EntitySelector
                  onShowDescendants={() => setParent("Item 2")}
                  checked={checked}
                  onToggle={handleToggle}
                >
                  Child Item 2 no descendants
                </EntitySelector>
                <EntitySelector
                  onShowDescendants={() => setParent("Item 3")}
                  checked={checked}
                  onToggle={handleToggle}
                >
                  Child Item 3 no descendants
                </EntitySelector>
              </>
            )}
          </>
        </EntitySelectorUI>
      )}
    </NullForm>
  );
};
Template.args = {
  label: "Select entity...",
};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};

Default.argTypes = {
  name: { control: { disable: true } },
};
