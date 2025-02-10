import { BlockDefinition, HookReturnType } from "../types/types";
import { useBlockForgeContext } from "./useBlockForgeContext";

export const useBlockForge = (): HookReturnType => {
  const { registerBlock } = useBlockForgeContext();

  const addBlock = (block: BlockDefinition) => {
    console.log("Adding block", block);
  };

  return {
    addBlock,
    registerBlock,
  };
};
