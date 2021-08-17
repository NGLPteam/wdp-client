import React, { createContext, useState, useCallback } from "react";

const initialState: PageContextProps = {
  loading: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoading: () => {},
};

const PageContext = createContext<PageContextProps>(initialState);

function PageContextProvider({ children }: Props) {
  const [loading, setLoading] = useState(false);

  return (
    <PageContext.Provider
      value={{
        loading,
        setLoading: useCallback(
          (value: boolean) => {
            setLoading(value);
          },
          [setLoading]
        ),
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

interface PageContextProps {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

interface Props {
  children: React.ReactNode;
}

export default PageContext;

export { PageContextProvider };
