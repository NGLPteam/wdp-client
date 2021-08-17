import React, { Ref, forwardRef } from "react";
import Input from "../Input";

import type InputProps from "../../inputType";

const Date = forwardRef(
  ({ ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return <Input type="date" ref={ref} {...props} />;
  }
);

export default Date;
