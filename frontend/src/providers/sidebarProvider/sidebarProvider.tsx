import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useScreenSize } from "../../hooks";

export interface SidebarContextProps {
  isOpen: boolean;
  isLargeScreen: boolean;
  toggleSidebar: () => void;
}

export interface SidebarProviderProps {
  children: React.ReactNode;
}

export const SidebarContext = createContext<SidebarContextProps>({
  isOpen: false,
  isLargeScreen: false,
  toggleSidebar: () => {},
});

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const { isLargeScreen, handleResize } = useScreenSize();
  const [isOpen, setIsOpen] = useState<boolean>(isLargeScreen);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {}, [isOpen]);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, isLargeScreen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
