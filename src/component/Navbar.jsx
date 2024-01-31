import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-amber-200 p-5">
            <nav className="flex justify-between">
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <h1>
                    Book Movie
                </h1>
            </nav>

        </div>
    );
};

export default Navbar;