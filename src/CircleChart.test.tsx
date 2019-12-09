import { render } from '@testing-library/react';
import * as React from 'react';
import CircleChart from '../build';

const values = [
  {angle: 45, color: '#47B881'},
  {angle: 50, color: '#EC4C47'},
  {angle: 73, color: '#E2E449'}
];

describe('CircleChart', () => {
  const setup = () => {
    return render(
      <CircleChart values={values} />
    );
  };

  it('should render without crashing', () => {
    setup();
  });

  it('[snapshot] is loaded with default props', () => {
    const {container} = setup();
    expect(container.firstChild).toMatchSnapshot();
  });
});
