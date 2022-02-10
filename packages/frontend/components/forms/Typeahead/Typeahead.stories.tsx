import { Story } from "@storybook/react";
import { useForm, Controller } from "react-hook-form";
import Typeahead from "./Typeahead";

type Props = React.ComponentProps<typeof Typeahead>;

export default {
  title: "Components/Forms/Typeahead",
  component: Typeahead,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const OPTIONS = [
  {
    label: "Option 1",
    value: "1",
  },
  {
    label: "Option 2",
    value: "2",
  },
];

const Template: Story<Props> = (args) => {
  const { control, watch } = useForm({ shouldUnregister: true });

  const watchTest = watch("test");

  return (
    <>
      <Controller
        control={control}
        name="test"
        render={({ field }) => (
          <Typeahead {...args} options={OPTIONS} {...field} />
        )}
      />
      <br />
      <div>Selected value: {JSON.stringify(watchTest)}</div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "typeahead",
  label: "Label",
  placeholder: "Placeholder",
};

const FANCY_OPTIONS = [
  {
    label: "Fancy Option 1 ✨",
    node: <em>Fancy Option 1 ✨</em>,
    value: { emoji: "✨", value: "1" },
  },
  {
    label: "Fancy Option 2 💅",
    node: <strong>Fancy Option 2 💅</strong>,
    value: { emoji: "💅", value: "2" },
  },
];

type Value = { emoji: string; value: string };

export const FancyOptions: Story<Props> = (args) => {
  const { control, watch } = useForm({ shouldUnregister: true });

  const watchTest = watch("test");

  return (
    <>
      <Controller
        control={control}
        name="test"
        render={({ field }) => (
          <Typeahead<Value> {...args} options={FANCY_OPTIONS} {...field} />
        )}
      />
      <br />
      <div>Selected value: {JSON.stringify(watchTest)}</div>
    </>
  );
};

FancyOptions.args = {
  id: "typeahead",
  label: "Label",
  placeholder: "Placeholder",
};
