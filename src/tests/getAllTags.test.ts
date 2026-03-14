import { describe, it, expect } from 'vitest';
import { getAllTags } from '../utils/data-utils.ts';

describe('getAllTags()', () => {
    it('should return a unique list of tag objects', () => {
        // 1. Arrange: Create fake posts with messy tags
        const fakePosts = [
            { data: { tags: ['Coding', 'coding'] } }, // Same word, different case
            { data: { tags: ['Design', 'Coding'] } }, // Repeated word
            { data: { tags: [null, 'Music'] } } // A "broken" empty tag
        ] as any;

        // 2. Act: Run the function
        const result = getAllTags(fakePosts);

        // 3. Assert: Check the results
        // We expect only 3 tags: coding, design, and music
        expect(result).toHaveLength(3);

        // Check if the first one is shaped correctly
        expect(result[0]).toEqual({ name: 'Coding', id: 'coding' });
    });
});
