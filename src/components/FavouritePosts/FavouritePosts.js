import React from "react";

import FavouritePost from "../FavouritePost/FavouritePost";

export const FavouritePosts = ({ favouritePosts, deleteFromFavourites }) => {
  return (
    <div>
      <h2>Favourite posts:</h2>

      {favouritePosts.length ? (
        favouritePosts.map((item) => (
          <FavouritePost
            key={item.id}
            post={item}
            deleteFromFavourites={deleteFromFavourites}
          />
        ))
      ) : (
        <h2>Currently no favourite posts 🤷‍♂️</h2>
      )}
    </div>
  );
};
