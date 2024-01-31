import { useNavigate } from "react-router-dom";


const MovieCard = ({ movie }) => {

    const { id, name, status,rating, premiered, runtime, image } = movie;
    const navigate = useNavigate();
    console.log(movie)
    return (
        <div className="rounded-2xl  border-2 border-gray p-4">
            {image ? (
                <div className="rounded-xl">
                    <img
                        src={image?.medium}
                        alt={name}
                    />
                </div>
            ) : (
                <div className="rounded-xl bg-gray-300 h-4/6 flex justify-center items-center"> no img</div>
            )}
            <div className="justify-between flex text-2xl font-bold">
                <h1 className="">{name}</h1>
                <h1>
                    <span className="text-amber-500">&#9733;</span>
                    {rating.average}
                </h1>
            </div>
            <p>Status: {status}</p>
            <p>Premiered: {premiered || "not available"}</p>
            <p>Runtime: {runtime || "none"} minutes</p>
            <div className="flex justify-center items-center" >
                <button className="self-center bg-amber-200 p-2 px-4 rounded-xl mt-2" onClick={() => navigate(`/movie/${id}`)}>
                    Read More
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
