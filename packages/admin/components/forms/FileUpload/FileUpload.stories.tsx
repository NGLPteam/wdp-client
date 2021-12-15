import { Story } from "@storybook/react";
import FileUpload, { Props } from "./FileUpload";
import NullForm from "components/api/NullForm";
import type { UploadedFileInput } from "types/graphql-schema";

type FormValues = {
  example?: UploadedFileInput;
};

export default {
  title: "Components/Forms/FileUpload",
  component: FileUpload,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

type StoryProps = Omit<Props<FormValues>, "name" | "error">;

export const InAForm: Story<StoryProps> = (args) => {
  return (
    <NullForm<FormValues>>
      {() => <FileUpload<FormValues> {...args} name="example" />}
    </NullForm>
  );
};

InAForm.args = {
  accept: undefined,
  label: "File Upload",
  placeholder: "Placeholder text",
  description: "Descriptive text",
  hideLabel: false,
  required: false,
};
