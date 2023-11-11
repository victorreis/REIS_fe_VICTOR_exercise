import { screenBreakpointRanges, screenBreakpoints } from '@utils/screen';
import styled from 'styled-components';

export const ListContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: stretch;

  @media only screen and (max-width: ${screenBreakpoints.sm}px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${screenBreakpointRanges.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${screenBreakpointRanges.lg} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${screenBreakpointRanges.xl} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
