import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlaying && (
      <div className="bg-black">
        <div className=" -mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
          <MovieList title={"Trending"} movies={movies.nowPlaying} />
          <MovieList title={"Popular"} movies={movies.nowPlaying} />
          <MovieList title={"Upcoming Movies"} movies={movies.nowPlaying} />
          <MovieList title={"Horror Movies"} movies={movies.nowPlaying} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
