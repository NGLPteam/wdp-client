import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";

import * as Styled from "./FormGrid.styles";

const FormGrid = ({ methods, twoColumns, children }: Props) => {
  // We need to provide a form context.
  const defaultMethods = useForm();

  const actualMethods = methods ?? defaultMethods;

  return (
    <FormProvider {...actualMethods}>
      <Styled.Grid twoColumns={twoColumns}>{children}</Styled.Grid>
    </FormProvider>
  );
};

interface Props {
  children: React.ReactNode;
  // todo: Make this required
  methods?: UseFormReturn<any>;
  twoColumns?: boolean;
}

export default FormGrid;
