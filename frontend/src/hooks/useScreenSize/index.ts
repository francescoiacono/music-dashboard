import { useState, useCallback } from "react";

export const useScreenSize = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const handleResize = useCallback(() => {
    setIsLargeScreen(window.innerWidth >= 768);
  }, []);

  return { isLargeScreen, handleResize };
};
