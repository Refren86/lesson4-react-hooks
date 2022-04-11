import React from "react";
import { Button } from "@mui/material";

import { useToggle } from "../../hooks/useToggle";
import styles from "./Post.module.css";

export const Post = ({ post, addToFavourites }) => {
  const { id, title, body } = post;
  const [isVisible, toggleVisible] = useToggle(true);

  return (
    <div className={styles.postBlock}>
      <h2>
        #{id} {title}
      </h2>

      <div className={styles.buttonsWrapper}>
        <Button
          variant="contained"
          color="success"
          onClick={() => addToFavourites(id)}
        >
          Add to favourites
        </Button>
        <Button variant="contained" color="primary" onClick={toggleVisible}>
          Hide/show description
        </Button>
      </div>

      {isVisible && <p>Description: {body}</p>}
    </div>
  );
};
