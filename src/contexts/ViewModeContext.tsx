import { createContext, useContext, useState, ReactNode } from "react";

type ViewMode = "full" | "recruiter";

interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  isRecruiterMode: boolean;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const ViewModeProvider = ({ children }: { children: ReactNode }) => {
  const [viewMode, setViewMode] = useState<ViewMode>("full");

  return (
    <ViewModeContext.Provider
      value={{
        viewMode,
        setViewMode,
        isRecruiterMode: viewMode === "recruiter",
      }}
    >
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode must be used within a ViewModeProvider");
  }
  return context;
};
