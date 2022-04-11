import { Button } from "@mui/material";
import React from "react";

import styles from "./FavouritePost.module.css";

const FavouritePost = ({ post, deleteFromFavourites }) => {
  const { id, title, body } = post;
  return (
    <div className={styles.postBlock}>
      <h3>
        Post #{id} {title}
      </h3>

      <p className={styles.postDescription}>{body}</p>

      <Button
        variant="contained"
        color="error"
        onClick={() => {
          deleteFromFavourites(id);
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default FavouritePost;
