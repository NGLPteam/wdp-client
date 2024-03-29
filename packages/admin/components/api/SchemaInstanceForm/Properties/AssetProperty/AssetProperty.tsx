import React, { useCallback } from "react";
import { graphql } from "relay-runtime";
import { useFragment } from "relay-hooks";
import { Controller, useFormContext } from "react-hook-form";
import isFunction from "lodash/isFunction";
import { Trans } from "react-i18next";
import Link from "next/link";
import { useRouteSlug } from "@wdp/lib/routes";
import ScalarProperty from "../ScalarProperty";
import { useSchemaFormFieldsContext } from "components/api/SchemaFormFields/SchemaFormFieldsContext";
import AssetPropertySelect from "components/forms/AssetPropertySelect";
import type { AssetPropertyFragment$key } from "@/relay/AssetPropertyFragment.graphql";
import { RouteHelper } from "routes";

export default function AssetProperty(props: Props) {
  const { assets: options, refetch } = useSchemaFormFieldsContext();

  const field = useFragment<AssetPropertyFragment$key>(fragment, props.field);

  const { control } = useFormContext();

  const handleRefetch = useCallback(
    () => (isFunction(refetch) ? refetch({}) : null),
    [refetch]
  );

  const slug = useRouteSlug();

  const LinkText = ({ children }: { children?: React.ReactNode }) => {
    const route = RouteHelper.activeRoute();
    const splitPath = route?.name.split(".") || null;
    const filesRoute =
      splitPath && splitPath[0]
        ? RouteHelper.findRouteByName(`${splitPath[0]}.manage.files`)
        : null;

    return (
      <Link href={{ pathname: filesRoute?.path, query: { slug } }}>
        <a className="a-link">{children}</a>
      </Link>
    );
  };

  return (
    <ScalarProperty field={field}>
      {({ label, required, name }) => (
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, ...fieldProps } }) => (
            <AssetPropertySelect
              label={label}
              required={required}
              options={options}
              onChange={(value?: string) => onChange(value || null)}
              refetchAssets={handleRefetch}
              description={
                props.description || (
                  <Trans
                    i18nKey="forms.asset_property_select.description"
                    components={{
                      filesLink: <LinkText />,
                    }}
                  />
                )
              }
              isWide
              {...fieldProps}
            />
          )}
        />
      )}
    </ScalarProperty>
  );
}
interface Props {
  field: AssetPropertyFragment$key;
  description?: string;
}

const fragment = graphql`
  fragment AssetPropertyFragment on AssetProperty {
    ...ScalarPropertyFragment
  }
`;
