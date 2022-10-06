import { useMutation } from "relay-hooks";
import { graphql, readInlineData } from "relay-runtime";
import { usePagePositionFragment$key } from "@/relay/usePagePositionFragment.graphql";
import { usePagePositionMutation } from "@/relay/usePagePositionMutation.graphql";

export default function usePagePosition() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mutate, mutationState] =
    useMutation<usePagePositionMutation>(mutation);

  const submitHandler = async ({
    destination,
    data,
  }: {
    destination: number;
    data: usePagePositionFragment$key;
  }) => {
    const pageData = readInlineData(fragment, data);

    const response = await mutate({
      variables: {
        input: {
          ...pageData,
          position: destination,
        },
      },
    });

    console.info(response);
  };

  return submitHandler;
}

const fragment = graphql`
  fragment usePagePositionFragment on Page @inline {
    pageId: id
    title
    slug
    body
    position
  }
`;

const mutation = graphql`
  mutation usePagePositionMutation($input: UpdatePageInput!) {
    updatePage(input: $input) {
      page {
        ...usePagePositionFragment
      }
    }
  }
`;
