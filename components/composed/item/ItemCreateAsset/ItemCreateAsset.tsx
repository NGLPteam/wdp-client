import React from "react";

import AssetCreateForm from "components/composed/asset/AssetCreateForm";

export default function ItemCreateAsset({ itemId }: Props) {
  return <AssetCreateForm entityId={itemId} />;
}

interface Props {
  itemId: string;
}
