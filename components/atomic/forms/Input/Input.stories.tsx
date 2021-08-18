import Input from "./";
import { Story } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button } from "components/atomic";

type Props = React.ComponentProps<typeof Input>;

export default {
  title: "Components/Atomic/Forms/Input",
  component: Input,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => <Input {...args} />;
Template.args = {
  type: "string",
  label: "Text Input",
  placeholder: "Placeholder text",
  description: "Descriptive text",
  hideLabel: false,
  required: false,
};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};

export const InAForm: Story<Props> = (args) => {
  const { register, handleSubmit, watch } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.info("submitted", data);

  console.info(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...args} {...register("example")} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
InAForm.args = {
  ...Default.args,
};
