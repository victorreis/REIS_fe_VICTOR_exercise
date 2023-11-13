import { PropsWithChildren } from 'react';

import { StyledContainer } from '@components/Container/styles';

export const Container = ({ children }: PropsWithChildren) => {
  return <StyledContainer data-testid="container">{children}</StyledContainer>;
};
