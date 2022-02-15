import { Story } from "@storybook/react";
import { RelayStorybook } from "@wdp/lib/storybook";
import AssetsPropertyControl from "./AssetsPropertyControl";
import { NullForm } from "components/api";

type Props = React.ComponentProps<typeof AssetsPropertyControl>;

type FieldValues = {
  assets?: string[];
};

const OPTIONS = [
  {
    label: "File A",
    value: "A",
    kind: "file",
  },
  {
    label: "File B",
    value: "B",
    kind: "file",
  },
  {
    label: "File C",
    value: "C",
    kind: "file",
  },
];

export default {
  title: "Components/Forms/AssetsPropertyControl",
  component: AssetsPropertyControl,
};

const Template: Story<Props> = (args) => {
  function handleSubmit(data: Record<string, string | string[]>) {
    console.info(data);
  }

  return (
    <RelayStorybook>
      <NullForm<FieldValues> onSubmit={handleSubmit}>
        {() => (
          <AssetsPropertyControl
            {...args}
            name="assets"
            options={OPTIONS}
            description={`Note: The "add file" form requires an API and will not work in this demo.`}
          />
        )}
      </NullForm>
    </RelayStorybook>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Assets",
  required: false,
  isWide: false,
};
