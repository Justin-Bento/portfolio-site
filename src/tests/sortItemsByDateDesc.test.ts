import { describe, it, expect } from 'vitest';
import { sortItemsByDateDesc } from '../utils/data-utils';

describe('sortItemsByDateDesc()', () => {
    it('should put the newer date before the older date', () => {
        // 1. Arrange: Create two fake posts
        const oldPost = { data: { publishDate: new Date('2026-01-01') } } as any;
        const newPost = { data: { publishDate: new Date('2026-03-01') } } as any;

        // 2. Act: Run the sorter
        // If result is negative, itemA comes first. If positive, itemB comes first.
        const result = sortItemsByDateDesc(oldPost, newPost);

        // 3. Assert: We expect a positive number because newPost (itemB) is newer
        expect(result).toBeGreaterThan(0);
    });
});
