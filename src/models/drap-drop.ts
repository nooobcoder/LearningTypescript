// https://www.typescriptlang.org/docs/handbook/interfaces.html

namespace App {
  // Drag & Drop Interfaces
  // export keyword for exporting the interfaces
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;

    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    dragOverHandler(event: DragEvent): void;

    dropHandler(event: DragEvent): void;

    dragLeaveHandler(event: DragEvent): void;
  }
}
