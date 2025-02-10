import React, { JSX } from "react";
import { BlockDefinition } from "../types/types";

export function renderBlock(block: BlockDefinition): JSX.Element {
  switch (block.type) {
    case "container":
      return (
        <div {...block.props}>
          {block.blocks?.map((child) => (
            <React.Fragment key={child.id}>{renderBlock(child)}</React.Fragment>
          ))}
        </div>
      );

    case "text":
      return <p {...block.props}>{block.content}</p>;

    case "image":
      return <img {...block.props} />;

    default:
      return <></>;
  }
}
