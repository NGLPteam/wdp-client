/* eslint-disable camelcase */
import groupBy from "lodash/groupBy";
import transform from "lodash/transform";

import { readInlineData } from "react-relay";
import type { FieldValues, Path } from "react-hook-form";
import type { GraphQLTaggedNode } from "relay-runtime";

import type {
  ErrorMap,
  HasErrorFragment,
  RemappedAttributeError,
} from "./types";
import {
  MutationForm_mutationErrors,
  MutationForm_mutationErrors$key,
} from "@/relay/MutationForm_mutationErrors.graphql";

export function extractErrors<T extends FieldValues = FieldValues>(
  fragment: GraphQLTaggedNode,
  errorResponse: HasErrorFragment | null
): ErrorMap<T> {
  const errors = readInlineData<MutationForm_mutationErrors$key>(
    fragment,
    errorResponse
  );

  const map: ErrorMap<T> = { global: [], attributes: [], user: [] };

  if (errors) {
    const { globalErrors, attributeErrors, errors: userErrors } = errors;

    map.attributes = transformAttributeErrors<T>(attributeErrors);
    map.global = globalErrors.map(({ message }) => message);
    map.user = userErrors.map(({ message }) => message);
  }

  return map;
}

function transformAttributeErrors<T extends FieldValues = FieldValues>(
  errors: MutationForm_mutationErrors["attributeErrors"]
): RemappedAttributeError<T>[] {
  const grouped = groupBy(errors, "path");

  const init: RemappedAttributeError<T>[] = [];

  return transform(
    grouped,
    (acc, set, path) => {
      if (set.length === 0) {
        return acc;
      }

      const err: RemappedAttributeError<T> = {
        path: path as Path<T>,
        error: { types: {} },
      };

      for (const { type: baseType, messages } of set) {
        for (const [index, message] of messages.entries()) {
          const type: string = index === 0 ? baseType : `${baseType}/${index}`;

          err.error.types[type] = message;
        }
      }

      acc.push(err);

      return acc;
    },
    init
  );
}

/* eslint-disable-next-line */
export function hasNoErrors(errors: ErrorMap<any>): boolean {
  return (
    errors.attributes.length === 0 &&
    errors.global.length === 0 &&
    errors.user.length === 0
  );
}
