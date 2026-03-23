import { test as base, expect } from "@playwright/test";

// If you don't need custom fixtures, you can just export directly:
export { test, expect } from "@playwright/test";

/**
 * If you eventually want to add custom logic (like logged-in states), 
 * you can extend the base here:
 */
// export const test = base.extend({
//   myCustomFixture: async ({ page }, use) => {
//     await use('hello');
//   },
// });