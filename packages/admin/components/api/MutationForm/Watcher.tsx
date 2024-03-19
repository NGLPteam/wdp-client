import { useEffect } from "react";

import { useWatch } from "react-hook-form";

import type { Control, FieldValues } from "react-hook-form";

export default function Watcher<T extends FieldValues = FieldValues>({
  control,
}: Props<T>) {
  const values = useWatch({ control });

  useEffect(
    function () {
      /* eslint-disable no-console */
      console.debug("[Mutation Form Watcher]: values changed");

      /* eslint-disable no-console */
      console.dir({ values });
    },
    [values],
  );

  return null;
}

interface Props<T extends FieldValues = FieldValues> {
  control: Control<T>;
}
