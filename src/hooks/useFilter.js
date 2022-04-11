import { useState } from "react";

export const useFilter = (array, filterProp) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredArr = searchValue
    ? array.filter((item) => RegExp(searchValue, "i").test(item[filterProp]))
    : array;

  return {
    searchValue,
    setSearchValue,
    filteredArr,
  };
};
