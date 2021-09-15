import React from "react";
import * as Form from "components/forms";
type InputProps = React.ComponentProps<typeof Form.Input>;
type SelectProps = React.ComponentProps<typeof Form.Select>;
type SwitchProps = React.ComponentProps<typeof Form.Switch>;
type TypeaheadProps = React.ComponentProps<typeof Form.Typeahead>;

export const FIELD_MAP = {
  input: Form.Input,
  text: Form.Input,
  email: Form.Email,
  datePicker: Form.DatePicker,
  textarea: Form.Textarea,
  select: Form.Select,
  switch: Form.Switch,
  typeahead: Form.Typeahead,
};

export const FIELD_KEYS = Object.keys(FIELD_MAP);

export type FieldKeys = keyof typeof FIELD_MAP;

function FormFactory({ field, ...props }: Props & AnyField) {
  const FieldComponent = FIELD_MAP[field];
  if (!FieldComponent) return null;

  return <FieldComponent {...props} />;
}

type AnyField = InputProps | SelectProps | SwitchProps | TypeaheadProps;

interface Props {
  field: FieldKeys;
}

export default FormFactory;
