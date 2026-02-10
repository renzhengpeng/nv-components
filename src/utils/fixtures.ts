/**
 * Test fixtures for nav-menu components
 * Provides common test data and configurations
 */

import type { MenuItemData } from './generators';

/**
 * Simple menu structure with 3 items
 */
export const simpleMenuFixture: MenuItemData[] = [
  { index: '1', label: 'Home', icon: 'home', route: '/' },
  { index: '2', label: 'About', icon: 'user', route: '/about' },
  { index: '3', label: 'Contact', icon: 'bell', route: '/contact' }
];

/**
 * Menu structure with one submenu
 */
export const menuWithSubmenuFixture: MenuItemData[] = [
  { index: '1', label: 'Home', icon: 'home', route: '/' },
  {
    index: '2',
    label: 'Products',
    icon: 'box',
    children: [
      { index: '2-1', label: 'Product A', route: '/products/a' },
      { index: '2-2', label: 'Product B', route: '/products/b' },
      { index: '2-3', label: 'Product C', route: '/products/c' }
    ]
  },
  { index: '3', label: 'Contact', icon: 'bell', route: '/contact' }
];

/**
 * Nested menu structure (3 levels deep)
 */
export const nestedMenuFixture: MenuItemData[] = [
  { index: '1', label: 'Home', icon: 'home', route: '/' },
  {
    index: '2',
    label: 'Products',
    icon: 'box',
    children: [
      { index: '2-1', label: 'Product A', route: '/products/a' },
      {
        index: '2-2',
        label: 'Product B',
        children: [
          { index: '2-2-1', label: 'Variant 1', route: '/products/b/v1' },
          { index: '2-2-2', label: 'Variant 2', route: '/products/b/v2' }
        ]
      },
      { index: '2-3', label: 'Product C', route: '/products/c' }
    ]
  },
  { index: '3', label: 'Contact', icon: 'bell', route: '/contact' }
];

/**
 * Menu with disabled items
 */
export const menuWithDisabledItemsFixture: MenuItemData[] = [
  { index: '1', label: 'Home', icon: 'home', route: '/' },
  { index: '2', label: 'About', icon: 'user', route: '/about', disabled: true },
  { index: '3', label: 'Contact', icon: 'bell', route: '/contact' }
];

/**
 * Menu with external links
 */
export const menuWithExternalLinksFixture: MenuItemData[] = [
  { index: '1', label: 'Home', icon: 'home', route: '/' },
  { index: '2', label: 'Documentation', icon: 'file', route: 'https://docs.example.com', external: true },
  { index: '3', label: 'GitHub', icon: 'star', route: 'https://github.com', external: true }
];

/**
 * Menu without icons
 */
export const menuWithoutIconsFixture: MenuItemData[] = [
  { index: '1', label: 'Home', route: '/' },
  { index: '2', label: 'About', route: '/about' },
  { index: '3', label: 'Contact', route: '/contact' }
];

/**
 * Large menu structure (for performance testing)
 */
export const largeMenuFixture: MenuItemData[] = Array.from({ length: 50 }, (_, i) => ({
  index: `item-${ i + 1 }`,
  label: `Menu Item ${ i + 1 }`,
  icon: i % 2 === 0 ? 'star' : 'heart',
  route: `/item-${ i + 1 }`
}));

/**
 * Common keyboard event configurations
 */
export const keyboardEvents = {
  tab: { key: 'Tab', shiftKey: false, ctrlKey: false, altKey: false },
  shiftTab: { key: 'Tab', shiftKey: true, ctrlKey: false, altKey: false },
  enter: { key: 'Enter', shiftKey: false, ctrlKey: false, altKey: false },
  space: { key: ' ', shiftKey: false, ctrlKey: false, altKey: false },
  escape: { key: 'Escape', shiftKey: false, ctrlKey: false, altKey: false },
  arrowUp: { key: 'ArrowUp', shiftKey: false, ctrlKey: false, altKey: false },
  arrowDown: { key: 'ArrowDown', shiftKey: false, ctrlKey: false, altKey: false },
  arrowLeft: { key: 'ArrowLeft', shiftKey: false, ctrlKey: false, altKey: false },
  arrowRight: { key: 'ArrowRight', shiftKey: false, ctrlKey: false, altKey: false }
};

/**
 * Common CSS class names for testing
 */
export const cssClasses = {
  active: 'is-active',
  disabled: 'is-disabled',
  open: 'is-open',
  collapsed: 'is-collapsed',
  horizontal: 'nv-nav-menu--horizontal',
  vertical: 'nv-nav-menu--vertical'
};

/**
 * Common ARIA attributes for testing
 */
export const ariaAttributes = {
  menubar: 'menubar',
  menu: 'menu',
  menuitem: 'menuitem',
  expanded: 'expanded',
  current: 'current',
  disabled: 'disabled'
};
