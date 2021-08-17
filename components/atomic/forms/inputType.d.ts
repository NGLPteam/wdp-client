import React from "react";

interface InputProps {
  label: string | React.ReactNode;
  description?: string | React.ReactNode;
  placeholder?: string;
  required?: boolean;
}

export default InputProps;
