import React from 'react';

import { render, screen } from '@testing-library/react';

import { Spinner } from '..';

describe('spinner', () => {
  it('should render spinner', () => {
    expect.assertions(1);
    render(<Spinner />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
