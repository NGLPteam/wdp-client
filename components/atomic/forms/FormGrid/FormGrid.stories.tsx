import FormGrid from "./";
import { Story } from "@storybook/react";
import { Input, DatePicker, Email } from "components/atomic/forms";
import NullForm from "components/api/NullForm";
import Switch from "../Switch";
import Textarea from "../Textarea";
import FileUpload from "../FileUpload";
import type { UploadedFileInput } from "types/graphql-schema";

type Props = Omit<React.ComponentProps<typeof FormGrid>, "children">;

type FormValues = {
  name?: string;
  email?: string;
  date?: string | Date;
  hidden?: boolean;
  image?: UploadedFileInput;
  bio?: string;
};

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
  return (
    <NullForm<FormValues> contentTitle="Example Form">
      {({ form: { register } }) => (
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
            name="image"
            accept="image/*"
            description="Allowed formats: webp, png, jpg"
          />
          <Textarea
            label="Bio"
            {...register("bio")}
            description="Enter a short bio"
          />
        </FormGrid>
      )}
    </NullForm>
  );
};
Template.args = {};

Template.argTypes = {
  children: { control: { disable: true } },
};

export const Default = Template.bind({});
Default.args = {
  twoColumns: false,
};

Default.argTypes = Template.argTypes;

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  twoColumns: true,
};

TwoColumns.argTypes = Template.argTypes;
