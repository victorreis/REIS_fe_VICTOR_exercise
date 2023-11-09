export const hasAllValuesDefined = <T extends object | undefined>(
  object: T
): object is Required<NonNullable<T>> =>
  object &&
  Object.values(object).every((value: unknown) => value !== undefined);
