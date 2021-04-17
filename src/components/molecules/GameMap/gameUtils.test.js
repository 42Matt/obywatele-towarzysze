import { getFixPosition } from './gameUtils';

describe('getFixPosition tests', () => {
  it('move more then fields', () => {
    expect(getFixPosition(4, 12)).toBe(6);
  });
  it('move more then fields plus modifier', () => {
    expect(getFixPosition(4, 12, 2)).toBe(8);
  });
  it('move inside fields, modifier on', () => {
    expect(getFixPosition(1, 4, 2)).toBe(9);
  });
});
