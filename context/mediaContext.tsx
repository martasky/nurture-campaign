import React, { ReactNode, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { MediaContext, MediaContextType } from "./mediaContextType";

interface ContextType {
  children: ReactNode;
}

const MediaContextWrapper: React.FC<ContextType> = ({ children }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const context: MediaContextType = {
    isDesktop,
  };
  return (
    <MediaContext.Provider value={context}>{children}</MediaContext.Provider>
  );
};

export default MediaContextWrapper;
