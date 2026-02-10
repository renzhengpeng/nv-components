/**
 * Test helper utilities for nav-menu components
 */

/**
 * Wait for a custom element to be defined
 */
export async function waitForCustomElement(tagName: string, timeout: number = 5000): Promise<void> {
  const startTime = Date.now();
  
  while (!customElements.get(tagName)) {
    if (Date.now() - startTime > timeout) {
      throw new Error(`Custom element ${tagName} was not defined within ${timeout}ms`);
    }
    await new Promise(resolve => setTimeout(resolve, 50));
  }
}

/**
 * Create and mount a custom element in the DOM
 */
export async function mountElement<T extends HTMLElement>(
  tagName: string,
  attributes: Record<string, string | boolean> = {},
  innerHTML: string = ''
): Promise<T> {
  await waitForCustomElement(tagName);
  
  const element = document.createElement(tagName) as T;
  
  // Set attributes
  for (const [key, value] of Object.entries(attributes)) {
    if (typeof value === 'boolean') {
      if (value) {
        element.setAttribute(key, '');
      }
    } else {
      element.setAttribute(key, value);
    }
  }
  
  // Set innerHTML if provided
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  
  // Mount to document body
  document.body.appendChild(element);
  
  // Wait for component to render
  await new Promise(resolve => setTimeout(resolve, 0));
  
  return element;
}

/**
 * Clean up all elements from the document body
 */
export function cleanupDOM(): void {
  document.body.innerHTML = '';
}

/**
 * Simulate a click event on an element
 */
export function simulateClick(element: HTMLElement): void {
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  element.dispatchEvent(event);
}

/**
 * Simulate a keyboard event on an element
 */
export function simulateKeyboard(
  element: HTMLElement,
  key: string,
  options: {
    shiftKey?: boolean;
    ctrlKey?: boolean;
    altKey?: boolean;
    metaKey?: boolean;
  } = {}
): void {
  const event = new KeyboardEvent('keydown', {
    key,
    bubbles: true,
    cancelable: true,
    ...options,
  });
  element.dispatchEvent(event);
}

/**
 * Wait for an event to be fired
 */
export function waitForEvent<T = any>(
  element: HTMLElement,
  eventName: string,
  timeout: number = 1000
): Promise<CustomEvent<T>> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      element.removeEventListener(eventName, handler);
      reject(new Error(`Event ${eventName} was not fired within ${timeout}ms`));
    }, timeout);
    
    const handler = (event: Event) => {
      clearTimeout(timer);
      element.removeEventListener(eventName, handler);
      resolve(event as CustomEvent<T>);
    };
    
    element.addEventListener(eventName, handler);
  });
}

/**
 * Check if an element is visible in the DOM
 */
export function isVisible(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element);
  return (
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    style.opacity !== '0'
  );
}

/**
 * Get all focusable elements within a container
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const selector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',');
  
  return Array.from(container.querySelectorAll(selector)) as HTMLElement[];
}

/**
 * Query shadow DOM for an element
 */
export function queryShadowRoot<T extends Element = Element>(
  host: HTMLElement,
  selector: string
): T | null {
  if (!host.shadowRoot) {
    return null;
  }
  return host.shadowRoot.querySelector<T>(selector);
}

/**
 * Query all elements in shadow DOM
 */
export function queryShadowRootAll<T extends Element = Element>(
  host: HTMLElement,
  selector: string
): T[] {
  if (!host.shadowRoot) {
    return [];
  }
  return Array.from(host.shadowRoot.querySelectorAll<T>(selector));
}

/**
 * Wait for a condition to be true
 */
export async function waitFor(
  condition: () => boolean,
  timeout: number = 1000,
  interval: number = 50
): Promise<void> {
  const startTime = Date.now();
  
  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error(`Condition was not met within ${timeout}ms`);
    }
    await new Promise(resolve => setTimeout(resolve, interval));
  }
}

/**
 * Get computed ARIA attribute value
 */
export function getAriaAttribute(element: HTMLElement, attribute: string): string | null {
  return element.getAttribute(`aria-${attribute}`);
}

/**
 * Check if element has a specific role
 */
export function hasRole(element: HTMLElement, role: string): boolean {
  return element.getAttribute('role') === role;
}
