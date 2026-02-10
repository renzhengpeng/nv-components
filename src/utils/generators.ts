/**
 * Property-based testing generators for nav-menu components
 * These generators create random test data for use with fast-check
 */

import * as fc from 'fast-check';

/**
 * Menu item data structure
 */
export interface MenuItemData {
  index: string;
  label: string;
  icon?: string;
  route?: string;
  external?: boolean;
  disabled?: boolean;
  children?: MenuItemData[];
}

/**
 * Generate a valid menu item index (alphanumeric with hyphens)
 */
export const indexArbitrary = (): fc.Arbitrary<string> => {
  return fc.stringMatching(/^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/);
};

/**
 * Generate a menu item label (non-empty string)
 */
export const labelArbitrary = (): fc.Arbitrary<string> => {
  return fc.string({ minLength: 1, maxLength: 50 }).filter((s: string) => s.trim().length > 0);
};

/**
 * Generate an icon name (common icon names)
 */
export const iconArbitrary = (): fc.Arbitrary<string> => {
  return fc.oneof(
    fc.constant('home'),
    fc.constant('user'),
    fc.constant('settings'),
    fc.constant('box'),
    fc.constant('file'),
    fc.constant('folder'),
    fc.constant('search'),
    fc.constant('bell'),
    fc.constant('heart'),
    fc.constant('star')
  );
};

/**
 * Generate a route path
 */
export const routeArbitrary = (): fc.Arbitrary<string> => {
  return fc.oneof(
    fc.constant('/'),
    fc.constant('/home'),
    fc.constant('/about'),
    fc.constant('/products'),
    fc.constant('/contact'),
    fc.webPath()
  );
};

/**
 * Generate a simple menu item (no children)
 */
export const menuItemArbitrary = (): fc.Arbitrary<MenuItemData> => {
  return fc.record({
    index: indexArbitrary(),
    label: labelArbitrary(),
    icon: fc.option(iconArbitrary(), { nil: undefined }),
    route: fc.option(routeArbitrary(), { nil: undefined }),
    external: fc.option(fc.boolean(), { nil: undefined }),
    disabled: fc.option(fc.boolean(), { nil: undefined })
  });
};

/**
 * Generate a menu item with optional children (submenu)
 * @param depth Maximum nesting depth (default: 2)
 */
export const menuItemWithChildrenArbitrary = (depth: number = 2): fc.Arbitrary<MenuItemData> => {
  if (depth <= 0) {
    return menuItemArbitrary();
  }

  return fc.record({
    index: indexArbitrary(),
    label: labelArbitrary(),
    icon: fc.option(iconArbitrary(), { nil: undefined }),
    route: fc.option(routeArbitrary(), { nil: undefined }),
    external: fc.option(fc.boolean(), { nil: undefined }),
    disabled: fc.option(fc.boolean(), { nil: undefined }),
    children: fc.option(
      fc.array(menuItemWithChildrenArbitrary(depth - 1), { minLength: 1, maxLength: 5 }),
      { nil: undefined }
    )
  });
};

/**
 * Generate a menu structure (array of menu items)
 * @param maxDepth Maximum nesting depth
 * @param minItems Minimum number of items
 * @param maxItems Maximum number of items
 */
export const menuStructureArbitrary = (
  maxDepth: number = 2,
  minItems: number = 1,
  maxItems: number = 10
): fc.Arbitrary<MenuItemData[]> => {
  return fc.array(menuItemWithChildrenArbitrary(maxDepth), { minLength: minItems, maxLength: maxItems });
};

/**
 * Generate keyboard event data
 */
export const keyboardEventArbitrary = (): fc.Arbitrary<{
  key: string;
  shiftKey: boolean;
  ctrlKey: boolean;
  altKey: boolean;
}> => {
  return fc.record({
    key: fc.oneof(
      fc.constant('Tab'),
      fc.constant('Enter'),
      fc.constant('Space'),
      fc.constant('Escape'),
      fc.constant('ArrowUp'),
      fc.constant('ArrowDown'),
      fc.constant('ArrowLeft'),
      fc.constant('ArrowRight')
    ),
    shiftKey: fc.boolean(),
    ctrlKey: fc.boolean(),
    altKey: fc.boolean()
  });
};

/**
 * Generate a menu mode
 */
export const menuModeArbitrary = (): fc.Arbitrary<'horizontal' | 'vertical'> => {
  return fc.oneof(fc.constant('horizontal' as const), fc.constant('vertical' as const));
};

/**
 * Generate a theme
 */
export const themeArbitrary = (): fc.Arbitrary<'light' | 'dark'> => {
  return fc.oneof(fc.constant('light' as const), fc.constant('dark' as const));
};

/**
 * Generate CSS class names
 */
export const cssClassArbitrary = (): fc.Arbitrary<string> => {
  return fc.stringMatching(/^[a-z][a-z0-9-]*$/);
};
