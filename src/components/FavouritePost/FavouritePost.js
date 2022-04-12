import { Button } from "@mui/material";
import React from "react";

import { useCopy } from "../../hooks/useCopy";
import styles from "./FavouritePost.module.css";

const FavouritePost = ({ post, deleteFromFavourites }) => {
  const { id, title, body } = post;
  const [isCopied, handleCopy] = useCopy(2500);

  return (
    <div className={styles.postBlock}>
      <h3>
        Post #{id} {title}
      </h3>

      <p className={styles.postDescription}>{body}</p>

      <div className={styles.buttonsContainer}>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            deleteFromFavourites(id);
          }}
        >
          Delete
        </Button>

        <Button variant="outlined" onClick={() => handleCopy(post)}>
          {isCopied ? "Copied" : "Copy"}
        </Button>
      </div>
    </div>
  );
};

export default FavouritePost;
