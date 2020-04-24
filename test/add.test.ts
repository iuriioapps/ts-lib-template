import { add } from '../src/add';

describe('Add tests', () => {
    test('test 1', () => {
        expect(add(1, 1)).toBe(2);
    })
});
