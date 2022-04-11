export const useSort = (array, sortBy) => {
  if (sortBy) {
    return [...array].sort((a, b) => a[sortBy].localeCompare(b[sortBy])); // відсортований масив по title/body
  }

  return array;
};
