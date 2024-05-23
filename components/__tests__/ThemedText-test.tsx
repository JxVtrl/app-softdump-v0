import * as React from 'react';
import renderer from 'react-test-renderer';

import TextStyled from '../TextStyled/TextStyled.component';

it(`renders correctly`, () => {
  const tree = renderer.create(<TextStyled>Snapshot test!</TextStyled>).toJSON();

  expect(tree).toMatchSnapshot();
});
