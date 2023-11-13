export const availableScreenBreakpoints = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
] as const;
export type ScreenBreakpoint = (typeof availableScreenBreakpoints)[number];
export const screenBreakpoints: Record<ScreenBreakpoint, number> = {
  xs: 320,
  sm: 481,
  md: 769,
  lg: 1025,
  xl: 1201,
};
export const screenBreakpointRanges: Record<ScreenBreakpoint, string> = {
  xs: `only screen and (max-width: ${screenBreakpoints.xs}px)`,
  sm: `only screen and (min-width: ${screenBreakpoints.xs}px) and (max-width: ${screenBreakpoints.sm}px)`,
  md: `only screen and (min-width: ${screenBreakpoints.sm}px) and (max-width: ${screenBreakpoints.md}px)`,
  lg: `only screen and (min-width: ${screenBreakpoints.md}px) and (max-width: ${screenBreakpoints.lg}px)`,
  xl: `only screen and (min-width: ${screenBreakpoints.lg}px)`,
};
