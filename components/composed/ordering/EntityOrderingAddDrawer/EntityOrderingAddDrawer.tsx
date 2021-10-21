import * as React from "react";
import Drawer from "components/layout/Drawer";
import type { DialogProps } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";

export default function EntityOrderingAddDrawer({
  dialog,
  params,
}: {
  dialog: DialogProps;
  params: Record<string, string>;
}) {
  return <></>;
}

const query = graphql`
  query EntityOrderingAddDrawerQuery($entitySlug: Slug!) {
    item(slug: $entitySlug) {
      ...EntityOrderingAddFormFragment
    }
    collection(slug: $entitySlug) {
      ...EntityOrderingAddFormFragment
    }
  }
`;
