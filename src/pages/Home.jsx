import {useEffect, useState} from "react";
import MovieCard from "../component/MovieCard.jsx";

const Home = () => {

    const [movies, setMovies] = useState([]);
    useEffect(() => {

        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full gap-6">
            <h1 className="text-4xl font-bold p-10">
                All the Shows
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">

                {movies.map((movie) => (
                    <MovieCard key={movie.show.id} movie={movie.show} score={movie.score}/>
                ))}
            </div>
        </div>
    );
};

export default Home;