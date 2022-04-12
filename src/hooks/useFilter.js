import { useState } from "react";

export const useFilter = (array, filterProp) => {
  const [searchValue, setSearchValue] = useState("");

  const resetSearch = () => {
    setSearchValue("");
  };

  const changeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredArr = searchValue
    ? array.filter((item) => RegExp(searchValue, "i").test(item[filterProp]))
    : array;

  return {
    searchValue,
    filteredArr,
    resetSearch,
    changeSearchValue,
  };
};
