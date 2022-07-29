/**
 * @jest-environment jsdom
 */
import { likesCount, commentsCount } from './Counter';

describe('Count the number or likes', () => {
  test('Assume previous likes is "14" expect "15" ', () => {
    document.body.innerHTML = '<span class="like-symbol">14</span>';
    expect(likesCount(14)).toBe(15);
  });
  test('comments = [{name: "Desmond", message: "Nice"}, {name: "Tushar", message: "Greate"}] expect "2"', () => {
    document.body.innerHTML = '<button class="comment">comment</button>';
    const preComments = [{ name: 'Desmond', message: 'Nice' },
      { name: 'Tushar', message: 'Great' }];
    const newComment = { name: 'Mike', message: "I don't love this movie" };
    expect(commentsCount(preComments, newComment)).toEqual(3);
  });
});
