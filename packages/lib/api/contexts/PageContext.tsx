import React, { createContext, useState } from "react";

const initialState: PageContextProps = {
  loading: false,
  setLoading: function () {
    // do nothing.
  },
  triggeredRefetchTags: [],
  setTriggeredRefetchTags: function () {
    // do nothing.
  },
};

const PageContext = createContext<PageContextProps>(initialState);

function PageContextProvider({ children }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [triggeredRefetchTags, setTriggeredRefetchTags] = useState<QueryTags>(
    [],
  );

  return (
    <PageContext.Provider
      value={{
        loading,
        setLoading,
        triggeredRefetchTags,
        setTriggeredRefetchTags,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

type QueryTags = Array<string>;

interface PageContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  triggeredRefetchTags: QueryTags;
  setTriggeredRefetchTags: React.Dispatch<React.SetStateAction<QueryTags>>;
}

interface Props {
  children: React.ReactNode;
}

export default PageContext;

export { PageContextProvider };
