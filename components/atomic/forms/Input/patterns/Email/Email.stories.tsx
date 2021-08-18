import Email from "./Email";
import { Story } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button } from "components/atomic";

type Props = React.ComponentProps<typeof Email>;

export default {
  title: "Components/Atomic/Forms/Email",
  component: Email,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => <Email {...args} />;
Template.args = {
  label: "Email",
  placeholder: "Placeholder text",
  description: "Descriptive text",
  hideLabel: false,
};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Template.args,
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
      <Email {...args} {...register("example")} required />
      <Button type="submit">Submit</Button>
    </form>
  );
};
InAForm.args = {
  ...Default.args,
};
