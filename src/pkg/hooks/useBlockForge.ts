import { HookReturnType } from "../types/types";
import { useBlockForgeContext } from "./useBlockForgeContext";

export const useBlockForge = (): HookReturnType => {
  const { registerBlock, addBlock } = useBlockForgeContext();

  return {
    addBlock,
    registerBlock,
  };
};
