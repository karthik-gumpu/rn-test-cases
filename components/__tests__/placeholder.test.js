import React from 'react';
import renderer from 'react-test-renderer';
import Placeholder from '../placeholder';

jest.mock('NativeAnimatedHelper');

describe('Placeholder Tests ', function () {
  it('Renders', () => {
    const tree = renderer.create(
      <Placeholder />
    ).toJSON();
  });
});
