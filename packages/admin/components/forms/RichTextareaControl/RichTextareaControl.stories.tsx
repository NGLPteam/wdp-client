import { Story } from "@storybook/react";
import RichTextareaControl from "./RichTextareaControl";
import { NullForm } from "components/api";

type Props = React.ComponentProps<typeof RichTextareaControl>;

type FieldValues = {
  body?: string;
};

export default {
  title: "Components/Forms/RichTextareaControl",
  component: RichTextareaControl,
};

const Template: Story<Props> = (args) => {
  function handleSubmit(data: Record<string, string | string[]>) {
    console.info(data);
  }

  return (
    <NullForm<FieldValues>
      onSubmit={handleSubmit}
      defaultValues={{ body: "A paragraph of text." }}
    >
      {({ form: { watch } }) => (
        <>
          <RichTextareaControl {...args} name="body" />
          <code style={{ display: "block", marginBlock: "1rem" }}>
            {watch("body")}
          </code>
        </>
      )}
    </NullForm>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Rich text area",
  required: false,
  isWide: true,
};
