import Select from "./";
import { Story } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button } from "components/atomic";

type Props = React.ComponentProps<typeof Select>;

export default {
  title: "Components/Atomic/Forms/Select",
  component: Select,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Select Dropdown",
  placeholder: "Select an item",
  description:
    "Description field adding detail or explanation for what this form field or control will do and offering guidance for how to use it.",
  options: [
    { label: "One", value: 1 },
    { label: "Two", value: 2 },
  ],
  hideLabel: false,
  required: false,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Default.args,
  error: {
    message: "Egads! An error!",
  },
};

export const InAForm: Story<Props> = (args) => {
  const { register, handleSubmit, watch } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.info("submitted", data);

  console.info(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select {...args} {...register("example")} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
InAForm.args = {
  ...Default.args,
};
