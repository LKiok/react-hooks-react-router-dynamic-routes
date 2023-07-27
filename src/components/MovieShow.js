import React from "react";
import { useParams } from "react-router-dom";

const MovieShow = ({ movies }) => {
  // Get the `movieId` parameter from the URL using `useParams` hook from `react-router-dom`
  const { movieId } = useParams();
  console.log(movieId); // Log the `movieId` to the console (for debugging purposes)

  return (
    <div>
      {/* Display the movie title based on the `movieId` parameter */}
      <h3>{movies[movieId].title}</h3>
    </div>
  );
};

export default MovieShow;
