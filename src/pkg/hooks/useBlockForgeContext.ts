import { useContext } from "react";
import { BlockForgeContext } from "../context/context";

export const useBlockForgeContext = () => {
  const context = useContext(BlockForgeContext);

  if (!context) {
    throw new Error("useBlockForge must be used within a BlockForgeProvider");
  }

  return context;
};
