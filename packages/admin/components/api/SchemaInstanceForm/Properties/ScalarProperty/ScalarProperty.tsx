import { useFragment, graphql } from "react-relay";

import type { ScalarPropertyFragment$key } from "@/relay/ScalarPropertyFragment.graphql";

/**
 * This component serves as a wrapper around individual schema property types.
 * It enables us to provide some normalization for labels and potential future
 * generic interfaces.
 */
export default function ScalarProperty(props: Props) {
  const { name, label, required, path, type, isWide } = useFragment<
    ScalarPropertyFragment$key
  >(fragment, props.field);

  // If we need to, we could override the label here

  const childProps: RenderScalarProps = {
    name,
    label,
    required,
    path,
    type,
    isWide,
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
  isWide?: boolean;
}

type RenderScalarProperty = (props: RenderScalarProps) => React.JSX.Element;

const fragment = graphql`
  fragment ScalarPropertyFragment on ScalarProperty {
    name: fullPath
    label
    path
    required
    type
    isWide
  }
`;
