import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import MoviePage from "./pages/MoviePage.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {

  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MoviePage />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
