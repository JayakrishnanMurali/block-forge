import { ReactNode, useCallback, useMemo, useRef, useState } from "react";
import { BlockForgeContext, initialContext } from "../context/context";
import { BlockDefinition } from "../types/types";

export const BlockForgeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const availableBlocksRef = useRef<BlockDefinition[]>(
    initialContext.availableBlocks
  );

  const [availableBlock, setAvailableBlock] = useState<BlockDefinition[]>(
    initialContext.availableBlocks
  );
  const [editorState, setEditorState] = useState<unknown>(
    initialContext.editorState
  );

  const [isEditable, setIsEditable] = useState(initialContext.isEditable);

  const pendingUpdateRef = useRef(false);

  const registerBlock = useCallback(
    (blocks: BlockDefinition[]): BlockDefinition[] => {
      const currentBlocks = availableBlocksRef.current;

      const uniqueBlocks = blocks.filter(
        (block) => !currentBlocks.some((b) => b.id === block.id)
      );

      if (uniqueBlocks.length > 0) {
        availableBlocksRef.current = [...currentBlocks, ...uniqueBlocks];
        if (!pendingUpdateRef.current) {
          pendingUpdateRef.current = true;
          Promise.resolve().then(() => {
            setAvailableBlock(availableBlocksRef.current);
            pendingUpdateRef.current = false;
          });
        }
      }

      return availableBlocksRef.current;
    },
    []
  );

  const updateEditorState = (state: unknown) => {
    setEditorState(state);
  };

  const updateIsEditable = (editable: boolean) => {
    setIsEditable(editable);
  };

  const context = useMemo(() => {
    return {
      availableBlocks: availableBlock,
      editorState,
      isEditable,

      // setters
      registerBlock,
      updateEditorState,
      updateIsEditable,
    };
  }, [availableBlock, editorState, isEditable, registerBlock]);

  return (
    <BlockForgeContext.Provider value={context}>
      {children}
    </BlockForgeContext.Provider>
  );
};
