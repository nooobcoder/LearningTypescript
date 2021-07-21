// General syntax to import a namespace in TypeScript

/// <reference path="models/drap-drop.ts" />
/// <reference path="models/project.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="util/validation.ts" />
/// <reference path="decorators/autobind.ts" />

/**
 * Referencing the components from,
 *
 * components/base-component.ts
 * components/project-input.ts
 * components/project-item.ts
 * components/project-list.ts
 */
/// <reference path="components/base-component.ts" />
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-item.ts" />
/// <reference path="components/project-list.ts" />

namespace App {
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}
