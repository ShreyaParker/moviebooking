import { useState } from "react";

const BookingForm = ({ movie, setForm }) => {
    const [user, setUser] = useState({
        movieName: movie.name,
        name: "",
        email: "",
        seats: 1,
        date: "",
    });
    const currentDate = new Date().toISOString().split('T')[0];

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleBookTicket = (e) => {
        e.preventDefault();
        const bookedMovies = JSON.parse(localStorage.getItem("bookedMovies")) || [];
        bookedMovies.push(user);
        localStorage.setItem("bookedMovies", JSON.stringify(bookedMovies));
        setForm(false);
    };


    return (
        <div className="flex flex-col rounded-2xl p-2 bg-gray-50 justify-center items-center h-5/6 w-96">
            <h1 > Movie: {movie.name}</h1>

            <form  onSubmit={handleBookTicket} className=" h-4/5 w-8/12 flex flex-col gap-3 ">
                <div className="mt-2 gap-2 flex flex-col" >
                    <label>
                        Name: </label>

                        <input
                            type="text"
                            name="name"
                            required
                            value={user.name}
                            className=" px-9 py-2 rounded-md"
                            onChange={handleInputChange}
                        />

                </div>
                <div>
                    <label>
                        Email:  </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={user.email}
                            className=" px-9 py-2 rounded-md"
                            onChange={handleInputChange}
                        />

                </div>
                <div>
                    <label>
                        Seats:</label>
                        <input
                            type="number"
                            name="seats"
                            value={user.seats}
                            required
                            min="1"
                            max="100"
                            className=" px-9 py-2 rounded-md"
                            onChange={handleInputChange}
                        />

                </div>
                <div >
                    <label>
                        Date:     </label>
                        <input
                            type="date"
                            name="date"
                            value={user.date}
                            required
                            className=" px-9 py-2 rounded-md"
                            onChange={handleInputChange}
                            min={currentDate}
                        />


                </div>
                <button type="submit" className="bg-amber-200 p-3 rounded-2xl" >
                    Confirm Booking
                </button>
                <button type="button"  className="bg-red-200 p-3 rounded-2xl" onClick={()=>setForm(false)}>
                    cancel
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
