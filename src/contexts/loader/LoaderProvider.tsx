import { createContext, useState } from "react";

interface LoaderContextProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const LoaderContext = createContext<LoaderContextProps>({
  loading: false,
  setLoading: () => {},
});

export const LoaderProvider = ({ children }: Children) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
