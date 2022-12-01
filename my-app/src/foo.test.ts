import { sum } from '../src/foo';

test('basic', () => {
  expect(sum(1,4)).toBe(5);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('basic error Pattern', () => {
    expect(sum(1, 2)).toBe(4);
  }
);