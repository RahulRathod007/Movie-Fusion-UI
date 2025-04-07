import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import Popular from './pages/Popular';
import UpcomingMovies from './pages/UpcomingMovies'; 
import TopRatedMovies from './pages/TopRatedMovies'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/upcoming" element={<UpcomingMovies />} />
        <Route path="/top-rated" element={<TopRatedMovies />} />
      </Routes>
    </Router>
    <Navbar />
    </>
  );
}

export default App;
