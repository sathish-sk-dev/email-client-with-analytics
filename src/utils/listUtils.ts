import { get } from "lodash";

/**
 * Searches a list of objects based on multiple keys (including nested keys) and a search value.
 *
 * @template T - The type of objects in the list.
 * @param {T[]} list - The list of objects to filter.
 * @param {(keyof T | string)[]} keys - The keys (including nested keys) within each object to search.
 * @param {string} searchValue - The value to search for.
 * @returns {T[]} - The searched list of objects.
 */
const searchList = <T>(
  list: T[],
  keys: (keyof T | string)[],
  searchValue: string,
): T[] => {
  const lowerCasedSearchValue = searchValue.toLowerCase();
  return list.filter((item) => {
    return keys.some((key) => {
      const itemValue = get(item, key.toString());
      const itemValueString = String(itemValue).toLowerCase();
      return itemValueString.includes(lowerCasedSearchValue);
    });
  });
};

export { searchList };
