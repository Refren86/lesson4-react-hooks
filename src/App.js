import { TextField } from "@mui/material";
import React, { useState } from "react";

import { PostsContainer, SelectionSort } from "./components";
import { useFilter } from "./hooks/useFilter";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useSort } from "./hooks/useSort";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  const { searchValue, setSearchValue, filteredArr } = useFilter(
    posts,
    "title"
  );

  const sortedPosts = useSort(filteredArr, selectedSort);

  const [favouritePosts, setFavouritePosts] = useLocalStorage(
    [],
    "favouritePosts"
  );

  const addToFavourites = (id) => {
    if (!favouritePosts.find((item) => item.id === id)) {
      const newFavouritePost = posts.find((item) => item.id === id);

      setFavouritePosts([...favouritePosts, newFavouritePost]);
    }
  };

  const deleteFromFavourites = (id) => {
    setFavouritePosts(favouritePosts.filter((item) => item.id !== id));
  };

  const sortArray = (sort) => {
    setSelectedSort(sort); // title/body
  };

  return (
    <div className="wrapper">
      <div className="searchField">
        <TextField
          fullWidth
          type="search"
          label="Search"
          variant="standard"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="search todo"
        />
      </div>

      <div>
        <SelectionSort
          value={selectedSort}
          sortArray={sortArray}
          defaultValue={"Sorting"}
          options={[
            { value: "title", name: "Title" },
            { value: "body", name: "Description" },
          ]}
        />
      </div>

      <hr style={{ margin: "20px 0" }} />

      <PostsContainer
        sortedPosts={sortedPosts}
        setPosts={setPosts}
        addToFavourites={addToFavourites}
        deleteFromFavourites={deleteFromFavourites}
        favouritePosts={favouritePosts}
      />
    </div>
  );
};

export default App;
