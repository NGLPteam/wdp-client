import { Story } from "@storybook/react";
import Checkbox from "../Checkbox";
import Select from "../Select";
import Typeahead from "../Typeahead";
import Fieldset from "./Fieldset";

type Props = React.ComponentProps<typeof Fieldset>;

export default {
  title: "Components/Forms/Fieldset",
  component: Checkbox,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => (
  <Fieldset {...args}>
    <Checkbox label="Checkbox" value="1" />
    <Select id="select" label="Select">
      <option>Select an option</option>
      <option>Option</option>
    </Select>
    <Typeahead
      id="typehead"
      label="Typeahead"
      placeholder="Select an option"
      options={[{ label: "Option", value: "option" }]}
    />
  </Fieldset>
);

export const Default = Template.bind({});
Default.args = {
  legend: "Legend",
};
