import React, { Ref, forwardRef } from "react";
import Input from "components/atomic/forms/Input";

import type InputProps from "components/atomic/forms/inputType";

const DatePicker = forwardRef(
  ({ ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return <Input type="date" ref={ref} {...props} />;
  }
);

export default DatePicker;
