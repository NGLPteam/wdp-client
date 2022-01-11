import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { IconFactory } from "components/factories";
import { CCLicenseFragment$key } from "@/relay/CCLicenseFragment.graphql";

export default function CCLicense({ data, className }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  const licenseLink = useMemo(
    () =>
      entity?.ccLicense?.selection
        ? `https://creativecommons.org/licenses/${entity.ccLicense.selection
            .toLowerCase()
            .replace("cc ", "")}/2.5/`
        : null,
    [entity]
  );

  return entity?.ccLicense?.selection ? (
    <div className={`l-flex l-flex--gap l-flex--gap-sm ${className || ""}`}>
      <IconFactory icon="cc" />
      {licenseLink && (
        <a target="_blank" rel="noreferrer" href={licenseLink}>
          <span>{t("metadata.cc_license")}</span>
        </a>
      )}
    </div>
  ) : null;
}

interface Props {
  data?: CCLicenseFragment$key | null;
  className?: string;
}

const fragment = graphql`
  fragment CCLicenseFragment on SchemaInstance {
    ccLicense: schemaProperty(fullPath: "cc_license") {
      ... on SelectProperty {
        selection
        defaultSelection
      }
    }
  }
`;
