import head from '../src/index';
import assert from 'assert';
import equal from 'deep-equal';
import { List } from 'immutable';

describe('head(coll)', () => {

  it('should return the first element in Array', () => {

    assert.equal(1, head([1, 2, 3]));
  });

  it('should return the first element in Set', () => {

    assert.equal(1, head(new Set([1, 2, 3])));
  });

  it('should return the first element in Map', () => {

    assert.ok(equal([1, 2], head(new Map([[1, 2], [3, 4]]))));
  });

  it('should return the first element in Immutable.List', () => {

    assert.equal(1, head(List([1, 2, 3])));
  });
});
