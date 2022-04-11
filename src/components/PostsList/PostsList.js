import React, { useEffect } from "react";

import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader/Loader";
import { Post } from "../Post/Post";
import styles from "./PostsList.module.css";

export const PostsList = ({ posts, setPosts, addToFavourites }) => {
  const [fetchData, isDataLoading, fetchError] = useFetch(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const responseData = await response.json();

    setPosts([...posts, ...responseData]);
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {fetchError && <h1 className={styles.errorMessage}>{fetchError}</h1>}

      <div>
        <h2>Posts: </h2>
        {posts.map((post) => (
          <Post post={post} key={post.id} addToFavourites={addToFavourites} />
        ))}
      </div>

      {isDataLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
    </div>
  );
};
