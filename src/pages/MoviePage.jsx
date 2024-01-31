import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BookingForm from "../component/BookingForm.jsx";

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [form, setForm] = useState(false);

    useEffect(() => {

        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative">
            {form && (
                <div className="fixed  inset-0  bg-gray-200  bg-opacity-50 backdrop-blur-md z-50"></div>
            )}
            <div className=" m-2 sm:m-10 flex flex-col sm:flex-row gap-5 justify-center items-center relative">
                {movie.image ? (
                    <img src={movie.image?.medium} alt={movie.name} />
                ) : (
                    <div className="rounded-xl bg-gray-300 h-72 w-2/6 flex justify-center items-center"> no img</div>

                )}
                <div className="flex flex-col w-8/12">
                    <h1 className="text-4xl font-bold">{movie.name}</h1>
                    <div className="text-2xl" dangerouslySetInnerHTML={{__html: movie.summary}}/>

                </div>

            </div>
            <div className="flex justify-center items-center">
                <button className=" px-7 p-4 text-2xl bg-amber-200 rounded-xl" onClick={() => setForm(true)}>
                    Book
                </button>
            </div>
            <div
                className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    form ? 'z-50' : '-z-10'
                }`}
            >
                {form && <BookingForm movie={movie} setForm={setForm}/>}
            </div>
        </div>
    );
};

export default MoviePage;
