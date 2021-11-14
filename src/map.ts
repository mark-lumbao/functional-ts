type funcType<T> = (a: T) => T;
type mapType = <T>(p: T[]) => (f: funcType<T>) => T[];

/**
 * Using array mapping.
 */
export const map: mapType = (list) => (a) => list.map(a);

/**
 * Using vanilla recursion for mapping.
 */
export const map2: mapType = (list) => (a) => {
  if (list.length <= 0) return [];
  return [a(list[0]), ...map2(list.slice(1))(a)];
};
