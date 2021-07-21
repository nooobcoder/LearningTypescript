// General syntax to import a namespace in TypeScript

/**
 * Referencing the components from,
 *
 * components/project-input.ts
 * components/project-list.ts
 */
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace App {
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}
