import { Page } from "@wdp/lib/types/page";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

// This is a redirect route. See routes/baseRoutes.ts.
const ItemDetail: Page = () => {
  return null;
};

const getLayout: GetLayout = () => <Layout isIndex />;

ItemDetail.getLayout = getLayout;

export default ItemDetail;
