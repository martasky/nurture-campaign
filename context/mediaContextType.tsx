import React from "react";

export type MediaContextType = {
  isDesktop: boolean;
};
export const MediaContext = React.createContext({} as MediaContextType);
