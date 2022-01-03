import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { Select } from "components/forms";
import { EntityOrderSelectFragment$key } from "@/relay/EntityOrderSelectFragment.graphql";

export default function EntityOrderSelect({
  data,
  onChange,
  defaultValue,
}: Props) {
  const orderings = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const id = "orderSelect";

  function handleChange({ target }: { target: HTMLSelectElement }) {
    const value = target.value;
    if (onChange) onChange(value);
  }

  return orderings && orderings.edges.length > 0 ? (
    <div>
      <label htmlFor={id} className="a-hidden">
        {t("form.order_label")}
      </label>
      <Select id={id} onChange={handleChange} defaultValue={defaultValue}>
        {orderings.edges.map(({ node }) => (
          <option key={node.identifier} value={node.identifier}>
            {node.name}
          </option>
        ))}
      </Select>
    </div>
  ) : null;
}

interface Props {
  data?: EntityOrderSelectFragment$key | null;
  onChange?: (value: string) => void;
  defaultValue?: string;
}

const fragment = graphql`
  fragment EntityOrderSelectFragment on OrderingConnection {
    edges {
      node {
        name
        identifier
      }
    }
  }
`;
