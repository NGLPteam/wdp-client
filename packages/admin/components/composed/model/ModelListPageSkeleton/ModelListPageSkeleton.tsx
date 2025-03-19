import ModelListPage from "components/composed/model/ModelListPage";
import { ModelListProps } from "components/composed/model/ModelList";
import PageHeader from "components/layout/PageHeader";

type Props = Pick<
  React.ComponentProps<typeof PageHeader>,
  "headerStyle" | "hideHeader"
> & {
  modelName?: ModelListProps<any, any>["modelName"]; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export default function ModelListPageSkeleton({
  headerStyle,
  hideHeader,
  modelName,
}: Props) {
  return (
    <ModelListPage<any, any> // eslint-disable-line @typescript-eslint/no-explicit-any
      modelName={modelName}
      columns={[]}
      data={null}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}
