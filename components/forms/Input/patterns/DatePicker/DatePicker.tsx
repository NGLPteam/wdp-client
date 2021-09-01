import React, { Ref, forwardRef } from "react";
import Input from "components/forms/Input";

import type InputProps from "components/forms/inputType";

const DatePicker = forwardRef(
  ({ ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return <Input type="date" ref={ref} {...props} />;
  }
);

export default DatePicker;
