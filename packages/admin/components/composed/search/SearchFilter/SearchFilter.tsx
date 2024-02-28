import { graphql, useFragment } from "react-relay";
import { SearchFilterFragment$key } from "@/relay/SearchFilterFragment.graphql";
import SearchFilterInput from "./Filters/SearchFilterInput";
import SearchFilterSelect from "./Filters/SearchFilterSelect";
import SearchFilterBoolean from "./Filters/SearchFilterBoolean";

export default function SearchFilter({ data }: Props) {
  const filter = useFragment(fragment, data);

  switch (filter.type) {
    case "SELECT":
      return <SearchFilterSelect data={filter} />;

    case "BOOLEAN":
      return <SearchFilterBoolean data={filter} />;

    case "INTEGER":
    case "VARIABLE_DATE":
    default:
      return <SearchFilterInput data={filter} />;
  }
}

interface Props {
  data: SearchFilterFragment$key;
}

const fragment = graphql`
  fragment SearchFilterFragment on SearchableProperty {
    ... on ScalarProperty {
      type
    }
    ...SearchFilterInputFragment
    ...SearchFilterSelectFragment
    ...SearchFilterBooleanFragment
  }
`;
