import React from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import {arrayMoveImmutable} from "array-move";
import FilePreview from "./FilePreview";

export default function FilePreviewGrid({
  files,
  FilePreviewExtra,
  setFiles,
  sortableFilePreviewGrid,
}) {
  const onSortEnd = (oldIndex, newIndex) =>
    setFiles(arrayMoveImmutable(files, oldIndex, newIndex));

  if (sortableFilePreviewGrid) {
    return (
      <SortableList
        onSortEnd={onSortEnd}
        className="flex flex-wrap place-content-center gap-2 md:gap-4"
        draggedItemClassName="opacity-50"
      >
        {files.map(
          (file, i) =>
            !file.deleted && (
              <SortableItem key={i}>
                <div className="cursor-grab select-none">
                  <FilePreview
                    file={file}
                    FilePreviewExtra={FilePreviewExtra}
                  />
                </div>
              </SortableItem>
            )
        )}
      </SortableList>
    );
  } else {
    return (
      <div className="flex flex-wrap place-content-center gap-2 md:gap-4">
        {files.map(
          (file, i) =>
            !file.deleted && (
              <FilePreview
                key={i}
                file={file}
                FilePreviewExtra={FilePreviewExtra}
              />
            )
        )}
      </div>
    );
  }
}
