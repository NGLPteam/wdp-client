import { useTranslation } from "react-i18next";
import { NamedLink, Button } from "@/components/atomic";
import { EntityNavListFragment$data } from "@/relay/EntityNavListFragment.graphql";

type Ordering = EntityNavListFragment$data["orderings"]["nodes"][number];

export default function BrowseButton({
  basePath,
  ordering,
}: {
  basePath: string;
  ordering: Ordering;
}) {
  const { t } = useTranslation();

  return (
    <li className="t-capitalize">
      <NamedLink href={`${basePath}/browse/${ordering.identifier}`}>
        <Button size="sm" secondary>
          {t("nav.browse_schema", { schema: ordering.name })}
        </Button>
      </NamedLink>
    </li>
  );
}
