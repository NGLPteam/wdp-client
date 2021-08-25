import React from "react";

import { ItemSlugToID } from "components/api/SlugToID";
import ItemLayout from "components/composed/item/ItemLayout";
import ItemCreateAsset from "components/composed/item/ItemCreateAsset";
import { Page } from "types/page";
import { useRouteSlug } from "hooks";

const ItemCreateAssetPage: Page = () => {
  const slug = useRouteSlug();

  if (!slug) {
    return null;
  }

  return (
    <ItemSlugToID slug={slug}>
      {({ id }) => <ItemCreateAsset itemId={id} />}
    </ItemSlugToID>
  );
};

ItemCreateAssetPage.getLayout = (page) => {
  return <ItemLayout>{page}</ItemLayout>;
};

export default ItemCreateAssetPage;
