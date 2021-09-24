import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { useFormContext } from "react-hook-form";
import type { UseFormRegisterReturn } from "react-hook-form";

import type { ScalarPropertyFragment$key } from "@/relay/ScalarPropertyFragment.graphql";

/**
 * This component serves as a wrapper around individual schema property types.
 * It enables us to provide some normalization for labels and potential future
 * generic interfaces.
 */
export default function ScalarProperty(props: Props) {
  const {
    name,
    label,
    required,
    path,
    type,
  } = useFragment<ScalarPropertyFragment$key>(fragment, props.field);

  const { register } = useFormContext();

  // If we need to, we could override the label here

  const childProps: RenderScalarProps = {
    name,
    label,
    required,
    path,
    type,
    register: register(name, { required }),
  };

  return props.children(childProps);
}

interface Props {
  field: ScalarPropertyFragment$key;
  children: RenderScalarProperty;
}

interface RenderScalarProps {
  name: string;
  label: string;
  required: boolean;
  path: string;
  type: string;
  register: UseFormRegisterReturn;
}

type RenderScalarProperty = (props: RenderScalarProps) => JSX.Element;

const fragment = graphql`
  fragment ScalarPropertyFragment on ScalarProperty {
    name: fullPath
    label
    path
    required
    type
  }
`;
