import React, { Ref, forwardRef } from "react";
import Input from "components/atomic/forms/Input";

import type InputProps from "components/atomic/forms/inputType";

const Email = forwardRef(
  ({ ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return <Input type="email" ref={ref} {...props} />;
  }
);

export default Email;
