/**
 * Test setup verification
 * This file verifies that the test environment is configured correctly
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';
import { indexArbitrary, labelArbitrary, menuItemArbitrary } from './generators';

describe('Test Environment Setup', () => {
  it('should have vitest configured', () => {
    expect(true).toBe(true);
  });

  it('should have fast-check available', () => {
    expect(fc).toBeDefined();
    expect(fc.assert).toBeDefined();
  });

  it('should have DOM environment available', () => {
    expect(document).toBeDefined();
    expect(window).toBeDefined();
    expect(customElements).toBeDefined();
  });
});

describe('Property-Based Testing Generators', () => {
  it('should generate valid menu item indices', () => {
    fc.assert(
      fc.property(indexArbitrary(), (index) => {
        // Index should be a non-empty string
        expect(index).toBeTruthy();
        expect(typeof index).toBe('string');
        expect(index.length).toBeGreaterThan(0);
        
        // Index should match the pattern (alphanumeric with hyphens)
        expect(index).toMatch(/^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/);
        
        return true;
      }),
      { numRuns: 100 }
    );
  });

  it('should generate valid menu item labels', () => {
    fc.assert(
      fc.property(labelArbitrary(), (label) => {
        // Label should be a non-empty string
        expect(label).toBeTruthy();
        expect(typeof label).toBe('string');
        expect(label.trim().length).toBeGreaterThan(0);
        
        return true;
      }),
      { numRuns: 100 }
    );
  });

  it('should generate valid menu items', () => {
    fc.assert(
      fc.property(menuItemArbitrary(), (item) => {
        // Item should have required properties
        expect(item).toHaveProperty('index');
        expect(item).toHaveProperty('label');
        
        // Index and label should be valid
        expect(typeof item.index).toBe('string');
        expect(typeof item.label).toBe('string');
        expect(item.index.length).toBeGreaterThan(0);
        expect(item.label.trim().length).toBeGreaterThan(0);
        
        // Optional properties should have correct types if present
        if (item.icon !== undefined) {
          expect(typeof item.icon).toBe('string');
        }
        if (item.route !== undefined) {
          expect(typeof item.route).toBe('string');
        }
        if (item.external !== undefined) {
          expect(typeof item.external).toBe('boolean');
        }
        if (item.disabled !== undefined) {
          expect(typeof item.disabled).toBe('boolean');
        }
        
        return true;
      }),
      { numRuns: 100 }
    );
  });
});
