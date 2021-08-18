import FormGrid from "./";
import { Story } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Button, ContentTitle } from "components/atomic";
import { Input, DatePicker, Email } from "components/atomic/forms";
import Switch from "../Switch";
import Textarea from "../Textarea";
import FileUpload from "../FileUpload";

type Props = React.ComponentProps<typeof FormGrid>;

export default {
  title: "Components/Atomic/Forms/FormGrid",
  component: FormGrid,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.info("submitted", data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ContentTitle as="h2">Example Form</ContentTitle>
        <FormGrid {...args}>
          <Input
            label="Display Name"
            {...register("name")}
            description="First and last name"
          />
          <Email
            label="Email"
            {...register("email")}
            description="Format: example@email.com"
          />
          <DatePicker
            label="Date"
            {...register("date")}
            description="Format: mm/dd/yyyy"
          />
          <Switch
            label="Hidden"
            text="Hide this user?"
            {...register("hidden")}
          />
          <FileUpload
            label="Image"
            {...register("image")}
            accept="image/*"
            description="Allowed formats: webp, png, jpg"
          />
          <Textarea
            label="Bio"
            {...register("bio")}
            description="Enter a short bio"
          />
        </FormGrid>
        <div className="l-flex l-flex--gap">
          <Button type="submit">Submit</Button>
          <Button type="button" secondary>
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};
Template.args = {};

export const Default = Template.bind({});
Default.args = {
  twoColumns: false,
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  twoColumns: true,
};
