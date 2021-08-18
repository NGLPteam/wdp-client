import Typeahead from "./";
import { Story } from "@storybook/react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "components/atomic";

type Props = React.ComponentProps<typeof Typeahead>;

export default {
  title: "Components/Atomic/Forms/Typeahead",
  component: Typeahead,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const ITEMS = Array.from({ length: 50 }, (_, i) => ({
  label: `Item ${i + 1}`,
  value: i + 1,
}));

const Template: Story<Props> = (args) => <Typeahead {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Typeahead Dropdown",
  placeholder: "Typeahead an item",
  description:
    "Description field adding detail or explanation for what this form field or control will do and offering guidance for how to use it.",
  options: ITEMS,
  hideLabel: false,
  required: false,
};

export const InAForm: Story<Props> = (args) => {
  const { control, handleSubmit, watch } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.info("submitted", data);

  console.info(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* We need to use react-hook-form's Controller because Typeahead is a controlled input */}
      <Controller
        name="example"
        control={control}
        defaultValue=""
        render={({ field }) => {
          console.log(field);
          return <Typeahead {...args} {...field} />;
        }}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
InAForm.args = {
  ...Default.args,
};
