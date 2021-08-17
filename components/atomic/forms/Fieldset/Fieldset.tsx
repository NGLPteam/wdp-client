import React from "react";

const Fieldset = ({ legend, children }: Props) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};

interface Props {
  legend: string;
  children: React.ReactNode;
}

export default Fieldset;
