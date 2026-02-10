# Test Utilities

This directory contains testing utilities for the nav-menu components, including property-based testing generators and helper functions.

## Overview

The test utilities are organized into two main modules:

1. **generators.ts** - Property-based testing generators using fast-check
2. **helpers.ts** - DOM manipulation and testing helper functions

## Property-Based Testing Generators

Property-based testing (PBT) uses randomly generated inputs to verify that properties hold across all valid inputs. We use the `fast-check` library for PBT.

### Available Generators

#### Basic Generators

- `indexArbitrary()` - Generates valid menu item indices (alphanumeric with hyphens)
- `labelArbitrary()` - Generates non-empty menu item labels
- `iconArbitrary()` - Generates common icon names
- `routeArbitrary()` - Generates route paths
- `menuModeArbitrary()` - Generates menu modes ('horizontal' | 'vertical')
- `themeArbitrary()` - Generates themes ('light' | 'dark')
- `cssClassArbitrary()` - Generates valid CSS class names

#### Complex Generators

- `menuItemArbitrary()` - Generates a simple menu item (no children)
- `menuItemWithChildrenArbitrary(depth)` - Generates a menu item with optional nested children
- `menuStructureArbitrary(maxDepth, minItems, maxItems)` - Generates a complete menu structure
- `keyboardEventArbitrary()` - Generates keyboard event data

### Usage Example

```typescript
import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { menuItemArbitrary } from './test-utils';

describe('MenuItem', () => {
  it('should always have a valid index', () => {
    fc.assert(
      fc.property(menuItemArbitrary(), (item) => {
        expect(item.index).toBeTruthy();
        expect(item.index.length).toBeGreaterThan(0);
        return true;
      }),
      { numRuns: 100 } // Run 100 iterations
    );
  });
});
```

## Helper Functions

### DOM Manipulation

- `mountElement<T>(tagName, attributes, innerHTML)` - Create and mount a custom element
- `cleanupDOM()` - Remove all elements from document.body
- `waitForCustomElement(tagName, timeout)` - Wait for a custom element to be defined

### Event Simulation

- `simulateClick(element)` - Simulate a click event
- `simulateKeyboard(element, key, options)` - Simulate a keyboard event
- `waitForEvent<T>(element, eventName, timeout)` - Wait for an event to be fired

### Shadow DOM Queries

- `queryShadowRoot<T>(host, selector)` - Query shadow DOM for an element
- `queryShadowRootAll<T>(host, selector)` - Query all elements in shadow DOM

### Visibility and Accessibility

- `isVisible(element)` - Check if an element is visible
- `getFocusableElements(container)` - Get all focusable elements
- `getAriaAttribute(element, attribute)` - Get ARIA attribute value
- `hasRole(element, role)` - Check if element has a specific role

### Utilities

- `waitFor(condition, timeout, interval)` - Wait for a condition to be true

### Usage Example

```typescript
import { describe, it, expect, afterEach } from 'vitest';
import { mountElement, cleanupDOM, simulateClick, waitForEvent } from './test-utils';

describe('NavMenu', () => {
  afterEach(() => {
    cleanupDOM();
  });

  it('should emit select event on item click', async () => {
    const menu = await mountElement('nv-nav-menu', {}, `
      <nv-menu-item index="1">Item 1</nv-menu-item>
    `);
    
    const eventPromise = waitForEvent(menu, 'select');
    const item = menu.querySelector('nv-menu-item');
    simulateClick(item!);
    
    const event = await eventPromise;
    expect(event.detail.index).toBe('1');
  });
});
```

## Configuration

### Vitest Configuration

The test environment is configured in `vitest.config.ts`:

- **Environment**: happy-dom (for Web Components support)
- **Globals**: Enabled (no need to import describe, it, expect)
- **Test Timeout**: 10 seconds
- **Coverage**: v8 provider with text, json, and html reporters

### Running Tests

```bash
# Run all tests once
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with UI
yarn test:ui

# Run tests with coverage
yarn test:coverage
```

## Property-Based Testing Guidelines

When writing property-based tests for this project:

1. **Run at least 100 iterations** - Configure `{ numRuns: 100 }` or more
2. **Tag tests with property numbers** - Use comments like:
   ```typescript
   // Feature: nav-menu-enhancement, Property 2: SubMenu 点击切换状态
   ```
3. **Use smart generators** - Constrain inputs to valid domain
4. **Test universal properties** - Not specific examples
5. **Verify invariants** - Properties that should always hold

## Best Practices

1. **Clean up after tests** - Always use `cleanupDOM()` in `afterEach`
2. **Wait for custom elements** - Use `waitForCustomElement()` before mounting
3. **Use shadow DOM queries** - Web Components use shadow DOM
4. **Test accessibility** - Use ARIA helpers to verify a11y
5. **Simulate real interactions** - Use event simulation helpers
6. **Handle async operations** - Use `waitFor()` and `waitForEvent()`

## Troubleshooting

### Custom element not defined

If you get "Custom element not defined" errors:
- Ensure the component is imported before testing
- Use `waitForCustomElement()` to wait for registration

### Shadow DOM queries fail

If `querySelector()` returns null:
- Use `queryShadowRoot()` instead
- Check that the component has rendered (add a small delay)

### Events not firing

If events aren't captured:
- Ensure events bubble (`bubbles: true`)
- Use `waitForEvent()` with appropriate timeout
- Check event names match exactly
