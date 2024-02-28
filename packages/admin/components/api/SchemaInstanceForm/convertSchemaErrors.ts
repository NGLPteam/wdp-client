import groupBy from "lodash/groupBy";
import { SchemaValueError } from "types/graphql-schema";
import type { FieldValues, MultipleFieldErrors, Path } from "react-hook-form";

type BaseSchemaErrors = Readonly<Omit<SchemaValueError, "base">[]>;

export function convertSchemaErrors<E extends BaseSchemaErrors>(
  schemaErrors: E,
): ConvertedSchemaError[] {
  if (schemaErrors.length === 0) {
    return [];
  }

  const grouped = groupBy(schemaErrors, "path");

  const errors: ConvertedSchemaError[] = [];

  for (const [path, errs] of Object.entries(grouped)) {
    const messages = errs.map(({ message }) => message);

    const types: MultipleFieldErrors = {};

    messages.forEach(function (message, index) {
      types[`error_${index}`] = message;
    });

    if (isPath(path)) {
      errors.push({ path, error: { types } });
    }
  }

  return errors;
}

function isPath(path: string): path is Path<FieldValues> {
  return Boolean(path);
}

type ConvertedSchemaError = {
  path: Path<FieldValues>;

  error: {
    types: MultipleFieldErrors;
  };
};
