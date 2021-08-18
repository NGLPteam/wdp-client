import { Story } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button } from "components/atomic";
import Switch from "./Switch";

type Props = React.ComponentProps<typeof Switch>;

export default {
  title: "Components/Atomic/Forms/Switch",
  component: Switch,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => <Switch {...args} />;
Template.args = {
  label: "Toggle",
  text: "Toggle text",
  description: "Description text",
  hideLabel: false,
  required: false,
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
      <Switch {...args} {...register("example")} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
InAForm.args = {
  ...Default.args,
};
