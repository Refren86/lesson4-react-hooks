import React from "react";

import { FavouritePosts } from "../FavouritePosts/FavouritePosts";
import { PostsList } from "../PostsList/PostsList";
import styles from "./PostsContainer.module.css";

export const PostsContainer = ({
  sortedPosts,
  setPosts,
  addToFavourites,
  deleteFromFavourites,
  favouritePosts,
}) => {
  return (
    <div className={styles.postsWrapper}>
      <PostsList
        posts={sortedPosts}
        setPosts={setPosts}
        addToFavourites={addToFavourites}
      />

      <FavouritePosts
        favouritePosts={favouritePosts}
        deleteFromFavourites={deleteFromFavourites}
      />
    </div>
  );
};
