import React, { Ref, forwardRef } from "react";
import Input from "components/forms/Input";

import type InputProps from "components/forms/inputType";

const Email = forwardRef(
  ({ ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return <Input type="email" ref={ref} {...props} />;
  }
);

export default Email;
