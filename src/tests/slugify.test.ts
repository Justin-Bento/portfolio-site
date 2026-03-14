import { describe, it, expect } from 'vitest';
import { slugify } from '../utils/common-utils'; // Point this to your file

describe('slugify()', () => {
    it('should make everything lowercase', () => {
        expect(slugify('HELLO')).toBe('hello');
    });

    it('should turn spaces into hyphens', () => {
        expect(slugify('hello world')).toBe('hello-world');
    });

    it('should remove special accents', () => {
        expect(slugify('crème brûlée')).toBe('creme-brulee');
    });

    it('should return an empty string if nothing is passed', () => {
        expect(slugify('')).toBe('');
    });
});
