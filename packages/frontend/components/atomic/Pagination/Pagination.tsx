import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { PaginationFragment$key } from "@/relay/PaginationFragment.graphql";
import BasePagination from "./BasePagination";

export default function Pagination({ data, onPageChange }: Props) {
  const pageData = useMaybeFragment(fragment, data);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Push query changes
  const onSubmit = (val: Record<string, string | number>) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", val.page.toString());
    const url = `${pathname}?${params.toString()}`;
    router.push(url);
  };

  return pageData?.pageCount && pageData.pageCount > 1 ? (
    <BasePagination
      page={pageData.page}
      pageCount={pageData.pageCount}
      onSubmit={onPageChange ?? onSubmit}
    />
  ) : null;
}

interface Props {
  data?: PaginationFragment$key | null;
  onPageChange?: (val: Record<string, string | number>) => void;
}

const fragment = graphql`
  fragment PaginationFragment on PageInfo {
    page
    pageCount
  }
`;
