import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "relay-runtime";
import get from "lodash/get";
import { QueryWrapper } from "@wdp/lib/api/components";
import routeQueryArrayToString from "@wdp/lib/routes/helpers/routeQueryArrayToString";
import { useRouter } from "next/router";
import Modal from "components/layout/Modal";
import FileCreateForm from "components/composed/file/FileCreateForm";
import type { DialogState } from "reakit/Dialog";
import type { FileCreateModalQuery as Query } from "__generated__/FileCreateModalQuery.graphql";

const FileCreateModal = ({ dialog, onSuccess }: Props) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { slug: slugQ, drawerSlug: drawerSlugQ } = router.query;
  const slug = routeQueryArrayToString(slugQ);
  const drawerSlug = routeQueryArrayToString(drawerSlugQ);

  const handleSuccess = useCallback(
    (newAssetId: string) => {
      if (onSuccess) onSuccess(newAssetId);
    },
    [onSuccess],
  );

  return (
    <Modal
      label={t("forms.asset_property_select.add_file")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      {({ handleClose }) => (
        <QueryWrapper<Query>
          query={query}
          initialVariables={{ slug: slug || drawerSlug || "" }}
        >
          {({ data }) => (
            <FileCreateForm
              entityId={data?.item?.id || data?.collection?.id || ""}
              onSuccess={(data) => {
                const assetId = get(data, "response.createAsset.asset.id");
                handleSuccess(assetId ?? "");
                handleClose();
              }}
            />
          )}
        </QueryWrapper>
      )}
    </Modal>
  );
};

interface Props {
  dialog: DialogState;
  onSuccess?: (newAssetId: string) => void;
}

export default FileCreateModal;

const query = graphql`
  query FileCreateModalQuery($slug: Slug!) {
    item(slug: $slug) {
      id
    }
    collection(slug: $slug) {
      id
    }
  }
`;
