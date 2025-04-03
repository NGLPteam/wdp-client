import { useTranslation } from "react-i18next";
import { useIsMobile } from "hooks";
import startCase from "lodash/startCase";
import ModelList, {
  type ModelListProps,
} from "components/composed/model/ModelList";
import PageHeader from "components/layout/PageHeader";
import PageCountActions from "components/layout/PageCountActions";
import { HasNodes } from "types/graphql-helpers";
import { ViewOptions } from "utils/view-options";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

type Props<
  U extends HasNodes,
  V extends Record<string, unknown> = Record<string, unknown>,
> = Pick<HeaderProps, "headerStyle" | "hideHeader"> &
  Omit<ModelListProps<U, V>, "view"> & { totalCount?: number };

export default function ModelListPageUnpaginated<
  U extends HasNodes,
  V extends Record<string, unknown> = Record<string, unknown>,
>({
  data,
  columns,
  totalCount,
  headerStyle,
  hideHeader,
  modelName,
}: Props<U, V>) {
  const pageInfo = {
    page: 1,
    pageCount: 1,
    perPage: 20,
    hasNextPage: false,
    hasPreviousPage: false,
    totalCount,
  };

  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <section>
      <PageHeader
        title={startCase(t(`glossary.${modelName}_other`))}
        headerStyle={headerStyle}
        hideHeader={hideHeader}
      />
      <PageCountActions
        loading={typeof pageInfo.totalCount !== "number"}
        pageInfo={pageInfo}
      />
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ModelList<U, V>
        data={data}
        columns={columns}
        modelName={modelName}
        view={isMobile ? ViewOptions.grid : ViewOptions.table}
      />
    </section>
  );
}
