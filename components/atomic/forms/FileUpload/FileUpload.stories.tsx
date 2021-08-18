import FileUpload from "./";
import { Story } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button } from "components/atomic";

type Props = React.ComponentProps<typeof FileUpload>;

export default {
  title: "Components/Atomic/Forms/FileUpload",
  component: FileUpload,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => <FileUpload {...args} />;
Template.args = {
  label: "File Upload",
  placeholder: "Placeholder text",
  description: "Descriptive text",
  hideLabel: false,
  multiple: false,
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
      <FileUpload {...args} {...register("example")} />
      <Button type="submit">Submit</Button>
    </form>
  );
};
InAForm.args = {
  ...Default.args,
};
