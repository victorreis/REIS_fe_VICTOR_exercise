import { Spinner } from '@components/Spinner';
import { render, screen } from '@testing-library/react';

describe('spinner', () => {
  it('should render spinner', () => {
    expect.assertions(1);
    render(<Spinner />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
