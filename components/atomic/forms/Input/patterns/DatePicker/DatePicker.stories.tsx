import DatePicker from "./DatePicker";
import { Story } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button } from "components/atomic";

type Props = React.ComponentProps<typeof DatePicker>;

export default {
  title: "Components/Atomic/Forms/DatePicker",
  component: DatePicker,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => <DatePicker {...args} />;
Template.args = {
  label: "Date Picker",
  placeholder: "Placeholder text",
  description: "Format: MM/DD/YYYY",
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
      <DatePicker {...args} {...register("example")} required />
      <Button type="submit">Submit</Button>
    </form>
  );
};
InAForm.args = {
  ...Default.args,
};
