import { ReactNode, useCallback, useMemo, useRef, useState } from "react";
import { BlockForgeContext, initialContext } from "../context/context";
import { BlockDefinition, EditorState } from "../types/types";
import { createBlockInstance } from "../helper/createBlockInstance";

export const BlockForgeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const availableBlocksRef = useRef<BlockDefinition[]>(
    initialContext.availableBlocks
  );

  const [availableBlock, setAvailableBlock] = useState(
    initialContext.availableBlocks
  );
  const [editorState, setEditorState] = useState(initialContext.editorState);

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

  const updateEditorState = (state: EditorState) => {
    setEditorState(state);
  };

  const updateIsEditable = (editable: boolean) => {
    setIsEditable(editable);
  };

  const addBlock = useCallback(({ type: blockType }: BlockDefinition) => {
    const prototypeBlock = availableBlocksRef.current.find(
      (block) => block.type === blockType
    );

    if (prototypeBlock) {
      const newBlockInstance = createBlockInstance(prototypeBlock);
      setEditorState((prevState) => ({
        ...prevState,
        block: {
          ...prevState.block,
          blocks: [...prevState.block.blocks!, newBlockInstance],
        },
      }));
    }
  }, []);

  const context = useMemo(() => {
    return {
      availableBlocks: availableBlock,
      editorState,
      isEditable,

      // setters
      registerBlock,
      addBlock,
      updateEditorState,
      updateIsEditable,
    };
  }, [availableBlock, editorState, isEditable, registerBlock, addBlock]);

  return (
    <BlockForgeContext.Provider value={context}>
      {children}
    </BlockForgeContext.Provider>
  );
};
