/**
 * @jest-environment jsdom
 */
import likesCount from './Counter';

describe('Count the number or likes', () => {
  test('Assume previous likes is "14" expect "15" ', () => {
    document.body.innerHTML = '<span class="like-symbol">14</span>';
    expect(likesCount(14)).toBe(15);
  });
});