export function sliceArray<T>(
  array: T[],
  start: number,
): { slicedFavoritesID: T[]; totalCharacters: number } {
  const sizeSlice = 10;
  const totalCharacters = array.length;
  const slicedFavoritesID = array.slice(start, start + sizeSlice);
  return { slicedFavoritesID, totalCharacters };
}
